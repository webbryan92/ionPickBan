import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { STAGES } from '../../services/storage';

import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-default',
  templateUrl: 'default.html'
})
export class DefaultPage {
  category: any;
  picklimit: any;
  phaseCount: any;
  turn: any;
  stages = STAGES;
  pickphase: any = "ban";
  picknumber: any = "A";
  count: any = 0;
  undo: any = 0;
  undoIndex: any;
  turns = [];
  turnIndex: any = 0;
  teamTurn: any;
  allowUndo: boolean;
  results = [];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.getDefaults();
    //set the appropriate turn order based on default picklimit
    if (this.picklimit == 2) {
      this.turns = ["1", "2", "2", "1", "2", "1"];
      this.teamTurn = this.turns[0];
    } else if (this.picklimit == 3) {
      this.turns = ["1", "2", "2", "1", "2", "1", "2", "1"];
      this.teamTurn = this.turns[0];
    }
    //default allowUndo to false
    this.allowUndo = false;
  }
  getDefaults() {
    //get the default values from localStorage
    this.category = localStorage.getItem('category') || 'unique';
    this.picklimit = localStorage.getItem('picklimit') || 2;
  }
  //handle click event on a stage
  handleClick(stage, index) {
    //selection mode determines what code to run
    switch (this.category) {
      case 'unique':
        //don't allow duplicate picks or more than specified
        if (!this.outOfBounds(this.picknumber) && !stage.used) {
          //advance counters
          this.allowUndo = true;
          this.count = this.count + 1;
          this.pickBanTurn();
          stage.phase = this.pickphase;
          if (stage.phase === "ban") {
            //store the stage object to allow undo and remove
            this.undo = stage;
            this.removeItem(stage, index);
            this.undoIndex = index;
          } else {
            //modify the stage object with the turn number
            stage.pickNum = this.picknumber;
            this.picknumber = this.nextChar(this.picknumber);
            stage.used = true;
            //add stage object to the undo to be acted upon
            this.undo = stage;
            this.undoIndex = index;
            this.addToResults(stage);
          }
          stage.hideme = !stage.hideme;
          //switch team
          this.turnIndex = this.turnIndex + 1;
          this.handleTurn();
          if (this.outOfBounds(this.picknumber)) {
            //alert user when you've selected all stages for confirmation
            this.presentConfirm();
          }
        }
        break;
      case 'teamUnique':
      //don't allow teams to select duplicates or out of bounds
        if (!this.outOfBounds(this.picknumber) && !this.teamUsed(stage)) {
          //advance counters
          this.allowUndo = true;
          this.count = this.count + 1;
          this.pickBanTurn();
          stage.phase = this.pickphase;
          if (stage.phase === "ban") {
            //store the stage object to allow undo and remove
            this.undo = stage;
            this.removeItem(stage, index);
            this.undoIndex = index;
          }
          else if (this.checkTurn(stage)) {
            //modify the stage object with the team that selected it
            if (stage.pickNum == null) {
              stage.pickNum = this.teamTurn.toString();
              stage.hideme = !stage.hideme;
            }
            else {
              stage.pickNum = stage.pickNum + ' ' + this.teamTurn;
            }
            this.picknumber = this.nextChar(this.picknumber);
            //flag the object with the team that used it
            if (this.teamTurn == '1') {
              stage.team1Used = true;
            }
            if (this.teamTurn == '2') {
              stage.team2Used = true;
            }
            //add stage object to the undo to be held for undo functionality
            this.undo = stage;
            this.undoIndex = index;
            this.addToResults(stage);
          }
          this.turnIndex = this.turnIndex + 1;
          this.handleTurn();
          if (this.outOfBounds(this.picknumber)) {
            //alert user when you've selected all stages for confirmation
            this.presentConfirm();
          }
        }
        break;
      case 'repeats':
      //check if the number is out of bounds
        if (!this.outOfBounds(this.picknumber)) {
          //advance counters
          this.allowUndo = true;
          this.count = this.count + 1;
          this.pickBanTurn();
          stage.phase = this.pickphase;
          if (stage.phase === "ban") {
            //store the stage object to allow undo and remove
            this.undo = stage;
            this.removeItem(stage, index);
            this.undoIndex = index;
          } else {
            //add the team that selects the stage, or concatenate it to the list
            if (stage.pickNum == null) {
              stage.pickNum = this.picknumber;
              this.picknumber = this.nextChar(this.picknumber);
              stage.hideme = !stage.hideme;
            } else {
              stage.pickNum = stage.pickNum + ' ' + this.picknumber;
              this.picknumber = this.nextChar(this.picknumber);
            }
            //add stage to the undo object
            this.undo = stage;
            this.undoIndex = index;
            this.addToResults(stage);
          }
          //switch team
          this.turnIndex = this.turnIndex + 1;
          this.handleTurn();
          if (this.outOfBounds(this.picknumber)) {
            //alert user when you've selected all stages for confirmation
            this.presentConfirm();
          }
        }
        break;
    }
  }
  restoreElement() {
    switch (this.category) {
      //based on the pick type setting run the appropriate rules to undo
      case 'unique':
        if (this.allowUndo) {
          this.undoUnique();
        }
        break;
      case 'teamUnique':
        if (this.allowUndo) {
          this.undoTeamUnique();
        }
        break;
      case 'repeats':
        if (this.allowUndo) {
          this.undoRepeats();
        }
        break;
    }
  }
  presentConfirm() {
    //menu to give user one last chance to undo a selection before moving to results
    let alert = this.alertCtrl.create({
      title: 'Confirm Selection',
      message: '',
      buttons: [
        {
          text: 'Undo',
          role: 'undo',
          handler: () => {
            //call the undo function to restore the element
            this.restoreElement();
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.allowUndo = false;
            this.navCtrl.push(ResultsPage, { results: this.results });
          }
        }
      ]
    });
    alert.present();
  }
  resetConfirm() {
    //confirmation window for resetting the page
    let alert = this.alertCtrl.create({
      title: 'Reset?',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'no',
          handler: () => {
            //run nothing and exit out of window
          }
        },
        {
          text: 'Yes',
          handler: () => {
            //trigger reset function
            this.reset();
          }
        }
      ]
    });
    alert.present();
  }
  checkTurn(stage) {
    //check if the team is trying to select their own stage
    if (this.teamTurn == '1' && stage.team1Used === true) {
      return false;
    }
    else if (this.teamTurn == '2' && stage.team2Used === true) {
      return false;
    }
    else {
      return true;
    }
  }
  undoUnique() {
    //if banphase
    if (this.pickphase == "ban") {
      if (this.undo !== 0) {
        this.stages.splice(this.undoIndex, 0, this.undo);//remove stage from the list
      }
      this.count = this.count - 1;
      this.allowUndo = false;
      this.undo.hideme = !this.undo.hideme;
      //set turn back
      this.turnIndex = this.turnIndex - 1;
      this.handleTurn();
    }
    //if pickphase
    else {
      this.picknumber = this.prevChar(this.picknumber); //set pick number back from ex. "B" to "A"
      this.undo.pickNum = null;                         //take away pickNum given
      this.undo.phase = null;                           //??
      this.undo.used = false;                           //flag item as unused
      this.undo.hideme = !this.undo.hideme;             //flip the hidden text property to re-hide
      this.count = this.count - 1;                      //reduce count of actions for determining pick/ban
      this.allowUndo = false;                           //Don't allow another undo
      this.turnIndex = this.turnIndex - 1;              //reset the index of whose turn it is.
      this.handleTurn();                                //undo turn order
      this.undoResults();
    }
  }
  undoTeamUnique() {
    //if banphase
    if (this.pickphase == "ban") {
      if (this.undo !== 0) {
        this.stages.splice(this.undoIndex, 0, this.undo);
      }
      this.count = this.count - 1;
      this.allowUndo = false;
      //this.undo.hideme = !this.undo.hideme;
      //set turn back
      this.turnIndex = this.turnIndex - 1;
      this.handleTurn();
    }
    //if pickphase
    else {
      //console.log(this.undo.hideme);
      this.picknumber = this.prevChar(this.picknumber);
      if (this.undo.pickNum.indexOf('1') !== -1 && this.undo.pickNum.indexOf('2') !== -1) {
        this.undo.pickNum = this.turns[this.turnIndex];
        if (this.undo.pickNum.indexOf('1') === -1) {
          this.undo.team1Used = null;
        }
        if (this.undo.pickNum.indexOf('2') === -1) {
          this.undo.team2Used = null;
        }
      }
      else if (this.undo.pickNum.indexOf('1') !== -1) {
        this.undo.pickNum = null;
        this.undo.team1Used = null;
        if (this.undo.pickNum == null) {
          this.undo.hideme = !this.undo.hideme;
        }
      }
      else if (this.undo.pickNum.indexOf('2') !== -1) {
        this.undo.pickNum = null;
        this.undo.team2Used = null;
        if (this.undo.pickNum == null) {
          this.undo.hideme = !this.undo.hideme;
        }
      }
      else {
        console.log('I shouldn\'t be here, ever');
        this.undo.pickNum = null;
        if (this.undo.pickNum == null) {
          this.undo.hideme = !this.undo.hideme;
        }
      }
      this.count = this.count - 1;
      this.allowUndo = false;
      //this.undo.phase = null;                       
      this.undo.used = false;
      this.turnIndex = this.turnIndex - 1;
      //console.log(this.undo.hideme);
      this.handleTurn();
      this.undoResults();
    }
  }
  undoRepeats() {
    //if banphase
    if (this.pickphase == "ban") {
      if (this.undo !== 0) {
        //reinsert the deleted item into the stage list
        this.stages.splice(this.undoIndex, 0, this.undo);
      }
      //this.undo.hideme = !this.undo.hideme;
      this.count = this.count - 1;//decrement pick/ban phase counter
      this.allowUndo = false;
      //set turn back
      this.turnIndex = this.turnIndex - 1; //decrement the index selecting turns
      this.handleTurn();
    }
    //if pickphase
    else {
      //return all the variables back to the default state
      this.picknumber = this.prevChar(this.picknumber);
      this.undo.pickNum = this.undo.pickNum.substring(0, this.undo.pickNum.indexOf(this.picknumber));
      //this.undo.used = false;
      if (this.picknumber == null) {
        this.undo.hideme = !this.undo.hideme;
      }
      this.count = this.count - 1;
      this.allowUndo = false;
      this.turnIndex = this.turnIndex - 1;
      this.handleTurn();
      this.undoResults();
    }
  }
  pickBanTurn() {
    //once 2 bans are made switch to pickphase
    if (this.count > 2) {
      this.pickphase = "pick";
    }
  }
  removeItem(stage, index) {
    this.stages.splice(index, 1);
  }
  addToResults(stage) {
    //add stage item click to the results
    this.results.push(stage);
  }
  undoResults() {
    //pop the most recent item added to the results object
    this.results.pop();
  }
  phase(phase) {
    //check to see if the page is set to pick
    if (phase === "pick") {
      return true;
    }
  }
  nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }
  prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
  }
  outOfBounds(p) {
    //If the pick couter goes over the limit retrurn false
    //refactor with a more generic variable??
    if (this.picklimit == 2) {
      if (p > "D") {
        return true;
      }
      else {
        return false;
      }
    }
    else if (this.picklimit == 3) {
      if (p > "F") {
        return true;
      }
      else {
        return false;
      }
    }
  }
  reset() {
    //refresh the webpage
    location.reload();
  }
  teamUsed(stage) {
    //if the team has used the stage, do not allow them to reselect
    return (this.teamTurn == '1' && stage.team1Used === true) ||
      (this.teamTurn == '2' && stage.team2Used === true)
  }
  handleTurn() {
    //sets the html display variable
    this.turns[this.turnIndex] == "1" ? this.teamTurn = 1 : this.teamTurn = 2
  }
}
