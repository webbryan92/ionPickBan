import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { STAGES } from '../../services/storage';

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
  queue = [];

  constructor(public navCtrl: NavController) {
    this.getDefaults();
    if (this.picklimit == 2) {
      this.turns = ["1", "2", "2", "1", "2", "1"];
      this.teamTurn = this.turns[0];
    } else if (this.picklimit == 3) {
      this.turns = ["1", "2", "2", "1", "2", "1", "2", "1"];
      this.teamTurn = this.turns[0];
    }
  }
  getDefaults() {
    this.category = localStorage.getItem('category') || 'unique';
    this.picklimit = localStorage.getItem('picklimit') || 2;
    /*if (localStorage.getItem('banlimit') != null) {
        this.banlimit = localStorage.getItem('banlimit');
    } else {
        this.banlimit = 2;
    }*/    
  }
  handleClick(stage, index) {
    switch (this.category) {
      case 'unique':
        if (!this.outOfBounds(this.picknumber) && !this.used(stage)) {
          this.allowUndo = true;
          this.count = this.count + 1;
          this.pickBanTurn();
          stage.phase = this.pickphase;
          if (stage.phase === "ban") {
            this.undo = stage;
            this.removeItem(stage, index);
            this.undoIndex = index;
          } else {
            stage.pickNum = this.picknumber;
            this.picknumber = this.nextChar(this.picknumber);
            stage.used = true;
            this.undo = stage;
            this.undoIndex = index;
          }
          stage.hideme = !stage.hideme;
          //switch team
          this.turnIndex = this.turnIndex + 1;
          this.handleTurn();
          /*if(this.outOfBounds(this.picknumber)){
            this.queue = this.stages.filter(stage => stage.pickNum);
          }*/
        }        
        break;
      case 'teamUnique':
        if (!this.outOfBounds(this.picknumber) && !this.teamUsed(stage)) {
          this.allowUndo = true;
          this.count = this.count + 1;
          this.pickBanTurn();
          stage.phase = this.pickphase;
          if (stage.phase === "ban") {
            this.undo = stage;
            this.removeItem(stage, index);
            this.undoIndex = index;
          }
          else if (this.checkTurn(stage)) {
            if (stage.pickNum == null) {
              stage.pickNum = this.teamTurn.toString();
              stage.hideme = !stage.hideme;
            }
            else {
              stage.pickNum = stage.pickNum + ' ' + this.teamTurn;
            }
            this.picknumber = this.nextChar(this.picknumber);            
            if (this.teamTurn == '1') {
              stage.team1Used = true;
            }
            if (this.teamTurn == '2') {
              stage.team2Used = true;
            }
            this.undo = stage;
            this.undoIndex = index;
          }//switch team
          this.turnIndex = this.turnIndex + 1;
          this.handleTurn();
        }
        break;
      case 'repeats':
        if (!this.outOfBounds(this.picknumber)) {
          this.allowUndo = true;
          this.count = this.count + 1;
          this.pickBanTurn();
          stage.phase = this.pickphase;
          if (stage.phase === "ban") {
            this.undo = stage;
            this.removeItem(stage, index);
            this.undoIndex = index;
          } else {
            if (stage.pickNum == null) {
              stage.pickNum = this.picknumber;
              this.picknumber = this.nextChar(this.picknumber);
              stage.hideme = !stage.hideme;
            } else {
              stage.pickNum = stage.pickNum + ' ' + this.picknumber;
              this.picknumber = this.nextChar(this.picknumber);
            }
            //stage.used = true;
            this.undo = stage;
            this.undoIndex = index;
          }
          //switch team
          this.turnIndex = this.turnIndex + 1;
          this.handleTurn();
        }
        break;
    }

  }
  restoreElement() {
    switch (this.category) {
      case 'unique': //ban 2 then select a stage breaks
        if (this.allowUndo) {
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
          }
        }
        break;
      case 'teamUnique':
        if (this.allowUndo) {
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
              console.log('I shouldn\'t be here');
              this.undo.pickNum = null;
              this.undo.team1Used = null;
              if (this.undo.pickNum == null) {
                this.undo.hideme = !this.undo.hideme;
              }
            }
            else if (this.undo.pickNum.indexOf('2') !== -1) {
              console.log('I shouldn\'t be here');
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
            //this.undo.phase = null;                           //??
            this.undo.used = false;
            this.turnIndex = this.turnIndex - 1;
            //console.log(this.undo.hideme);
            this.handleTurn();
          }
        }
        break;
      case 'repeats':
        if (this.allowUndo) {
          if (this.pickphase == "ban") {
            if (this.undo !== 0) {
              this.stages.splice(this.undoIndex, 0, this.undo);
            }
            //this.undo.hideme = !this.undo.hideme;
            this.count = this.count - 1;
            this.allowUndo = false;
            //set turn back
            this.turnIndex = this.turnIndex - 1;
            this.handleTurn();
          }
          else {
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
          }
        }
        break;
    }
  }
  checkTurn(stage) {
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
  pickBanTurn() {
    if (this.count > 2) {
      this.pickphase = "pick";
    }
  }
  removeItem(stage, index) {
    this.stages.splice(index, 1);
  }
  phase(phase) {
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
    /*switch (this.picklimit) {
      case '2':
        if (p > "D") {
          return true;
        }
        else {
          return false;
        }
      case '3':
        if (p > "F") {
          return true;
        }
        else {
          return false;
        }
    }*/
    if(this.picklimit == 2){
      if (p > "D") {
        return true;
      }
      else {
        return false;
      }
    }
    else if(this.picklimit == 3){
      if (p > "F") {
        return true;
      }
      else {
        return false;
      }
    }
  }
  reset() {
    location.reload();
  }
  used(stage) {
    if (stage.used) {
      return true;
    }
    else {
      return false;
    }
  }
  teamUsed(stage) {
    return (this.teamTurn == '1' && stage.team1Used === true) ||
       (this.teamTurn =='2' && stage.team2Used === true)
  }
  handleTurn() { //sets the html display variable
    this.turns[this.turnIndex] == "1" ? this.teamTurn = 1 : this.teamTurn = 2
  }
}
