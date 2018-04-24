import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { STAGES } from '../../services/storage';

@Component({
  selector: 'page-default',
  templateUrl: 'default.html'
})
export class DefaultPage {
  category: any;
  phaseCount: any;
  turn: any;
  stages = STAGES;
  pickphase: any = "ban";
  picknumber: any = "A";
  count: any = 0;
  undo: any = 0;
  undoIndex: any;
  turns = ["1", "2", "2", "1", "2", "2"];
  turnIndex: any = 0;
  teamTurn: any = this.turns[0];
  allowUndo: boolean;
  
  constructor(public navCtrl: NavController) {
    this.getDefaults();
  }
  getDefaults() {
    if (localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'unique';
    }
    /*if (localStorage.getItem('picklimit') != null) {
        this.picklimit = localStorage.getItem('picklimit');
    } else {
        this.picklimit = 2;
    }
    if (localStorage.getItem('banlimit') != null) {
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
          }else {
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
        }
        break;
      case 'teamUnique':
        if (!this.outOfBounds(this.picknumber) && !this.used(stage)) {
          this.allowUndo = true;
          this.count = this.count + 1;
          this.pickBanTurn();
          stage.phase = this.pickphase;
          if (stage.phase === "ban") {
            this.undo = stage;
            this.removeItem(stage, index);
            this.undoIndex = index;
          }
          stage.pickNum = this.picknumber;
          this.picknumber = this.nextChar(this.picknumber);
          stage.used = true;
          this.undo = stage;
          this.undoIndex = index;

          stage.hideme = !stage.hideme;
          //switch team
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
            stage.used = true;
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
  pickBanTurn() {
    if (this.count > 2) {
      this.pickphase = "pick";
    }
  }
  removeItem(stage, index) {
    this.stages.splice(index, 1);
  }
  restoreElement() {
    if (this.allowUndo) {
      if (this.pickphase == "ban") {
        if (this.undo !== 0) {
          this.stages.splice(this.undoIndex, 0, this.undo);//remove stage from the list
        }
        this.count = this.count - 1;
        this.allowUndo = false;
        //set turn back
        this.turnIndex = this.turnIndex - 1;
        this.handleTurn();
      }
      else {
        this.picknumber = this.prevChar(this.picknumber); //set pick number back from ex. "B" to "A"
        this.undo.pickNum = null;                         //take away pickNum given(uncessary?)
        this.undo.used = false;                           //flag item as unused
        this.undo.hideme = !this.undo.hideme;             //flip the hidden text property to re-hide
        this.count = this.count - 1;                      //reduce count of actions for determining pick/ban
        this.allowUndo = false;                           //Don't allow another undo
        this.turnIndex = this.turnIndex - 1;              //reset the index of whose turn it is.
        this.handleTurn();                                //undo turn order
      }
    }
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
    if (p > "D") {
      return true;
    }
    else {
      return false;
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
  handleTurn() {
    if (this.turns[this.turnIndex] == "1") {
      this.teamTurn = "1";
    }
    else {
      this.teamTurn = "2";
    }
  }
}
