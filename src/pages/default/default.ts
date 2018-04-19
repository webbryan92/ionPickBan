import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { STAGES } from '../../services/storage';

@Component({
  selector: 'page-default',
  templateUrl: 'default.html'
})
export class DefaultPage {
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

  }
  handleClick(stage, index) {
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
      else {        
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
  }
  pickBanTurn() {
    if (this.count > 2) {
      this.pickphase = "pick";
    }
  }
  removeItem(stage, index) {    
    this.stages.splice(index, 1);
  }
  restoreElement() {//SHITS FUCKED OUTSIDE BANS LADS
    if (this.allowUndo) {
      if (this.pickphase == "ban") {
        if (this.undo !== 0) {
          this.stages.splice(this.undoIndex, 0, this.undo);
        }
        this.count = this.count - 1;
        this.allowUndo = false;
        //set turn back
        this.turnIndex = this.turnIndex - 1;
        this.handleTurn();
      }
      else {
        //handle during pick phase
        //store index of previously selected item        
        this.picknumber = this.prevChar(this.picknumber);
        this.undo.pickNum = null;
        this.undo.used = false;
        this.undo.hideme = !this.undo.hideme;
        this.count = this.count - 1;
        this.allowUndo = false;
        this.turnIndex = this.turnIndex - 1;
        this.handleTurn(); //undo turn order
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
      console.log(this.teamTurn);
    }
    else {
      this.teamTurn = "2";
      console.log(this.teamTurn);
    }
  }
}
