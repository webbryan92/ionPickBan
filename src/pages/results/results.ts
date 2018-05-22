import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Navbar } from 'ionic-angular';

@Component({
    selector: 'page-results',
    templateUrl: 'results.html'
})
export class ResultsPage {
    @ViewChild(Navbar) navBar: Navbar; //initializing navbar button
    stages: any;
    randomized: any;
    pickSequ = 1;
    returnNum: any;
    constructor(public navCtrl: NavController, public params: NavParams) {
        this.params = params;
        this.stages = params.data.results;
        this.splitStages(this.stages);
    }
    splitStages(stages) {
        this.randomized = stages.splice(-2, 2);
        this.shuffleArray(this.randomized);
        this.stages = this.stages.concat(this.randomized)
    }
    // -> Fisher–Yates shuffle algorithm
    shuffleArray(array) {
        var m = array.length, t, i;
        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }
    pickOrder(){
        this.returnNum = this.pickSequ;
        this.pickSequ++;
        return this.returnNum;
    }
    ionViewDidLoad() {  //overriding back button
        this.navBar.backButtonClick = (e:UIEvent)=>{
         // todo something         
         this.navCtrl.pop();
         location.reload();
        }
      }
}

