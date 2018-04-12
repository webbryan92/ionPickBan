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
  //banphase: any = "";
  count: any = 0;
  constructor(public navCtrl: NavController) {

  }
  /*handleClick(stage){
    stage.hideme = !stage.hideme;
    this.count = this.count+1;
    this.pickBanTurn();
  }
  pickBanTurn(){
    if(this.count > 2){
      this.banphase = false;
      this.pickphase = true;
    }
  }*/
  handleClick(stage){
    stage.hideme = !stage.hideme;
    stage.phase = this.pickphase;
    this.count = this.count+1;
    this.pickBanTurn();
  }
  pickBanTurn(){
    if(this.count > 2){
      this.pickphase = "pick";
    }
  }
  /*public on(index) {
    document.getElementById("overlayText_{{index}}").style.display = "block";
  }
  public off() {
    document.getElementById("overlayText_{{index}}").style.display = "none";
  }*/
}
