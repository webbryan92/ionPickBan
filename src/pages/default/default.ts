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
  constructor(public navCtrl: NavController) {

  }
  handleClick(stage, index){
    if(!this.outOfBounds(this.picknumber)){
      this.count = this.count+1;    
      this.pickBanTurn();    
      stage.phase = this.pickphase; 
      if(stage.phase === "ban"){
        this.removeItem(stage, index);
      }
      else{
        stage.pickNum = this.picknumber;
        this.picknumber = this.nextChar(this.picknumber);
      }    
      stage.hideme = !stage.hideme;  
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
    if(this.undo !== 0){
      this.stages.splice(this.undoIndex, 0, this.undo);
    }
    this.count = this.count--    
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
}
