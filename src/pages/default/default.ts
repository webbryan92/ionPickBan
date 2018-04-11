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
  hideme: any = {};
  banphase: any = true;
  pickphase: any = false;
  count: any = 0;
  constructor(public navCtrl: NavController) {

  }
  handleClick(stage){
    stage.hideme = !stage.hideme;
    this.count = this.count+1;
    this.pickBanTurn();
  }
  onClick(item) {
    Object.keys(this.hideme).forEach(h => {
      this.hideme[h] = false;
    });
    this.hideme[item.id] = true;
  }
  pickBanTurn(){
    if(this.count > 2){
      this.banphase = false;
      this.pickphase = true;
    }
  }
  /*public on(index) {
    document.getElementById("overlayText_{{index}}").style.display = "block";
  }
  public off() {
    document.getElementById("overlayText_{{index}}").style.display = "none";
  }*/
}
