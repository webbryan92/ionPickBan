import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { STAGES } from '../../services/storage';

@Component({
  selector: 'page-default',
  templateUrl: 'default.html'
})
export class DefaultPage {
  phaseCount:any;
  turn:any;
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
  handleClick(stage, index){
    if(!this.outOfBounds(this.picknumber) && !this.used(stage)){
      this.allowUndo = true;
      this.count = this.count+1;    
      this.pickBanTurn();    
      stage.phase = this.pickphase; 
      if(stage.phase === "ban"){
        this.removeItem(stage, index);
      }
      else{
        stage.pickNum = this.picknumber;
        this.picknumber = this.nextChar(this.picknumber);
        stage.used = true;
      }    
      stage.hideme = !stage.hideme;
      this.handleTurn();
    }     
  }
  pickBanTurn(){
    if(this.count > 2){
      this.pickphase = "pick";
    }
  }
  removeItem(stage, index){
    this.undo = stage;
    this.stages.splice(index, 1);
    this.undoIndex = index;     
  }
  restoreElement(){
    if(this.allowUndo){
      if(this.undo !== 0){
        this.stages.splice(this.undoIndex, 0, this.undo);
      }
      this.count = this.count-1  
      this.allowUndo = false;
    }      
  }
  phase(phase){
    if(phase === "pick"){
      return true;
    }
  }
  nextChar(c){
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }
  outOfBounds(p){
    if(p > "D"){
      return true;
    }
    else{
      return false;
    }
  }
  reset(){
    location.reload();
  }
  used(stage){
    if(stage.used){
      return true;
    }
    else{
      return false;
    }
  }
  handleTurn(){
    this.turnIndex = this.turnIndex+1;
    if(this.turns[this.turnIndex] == "1"){
      this.teamTurn = "1";
      console.log(this.teamTurn);
    }
    else {
      this.teamTurn = "2";
      console.log(this.teamTurn);
    }    
  }
}
