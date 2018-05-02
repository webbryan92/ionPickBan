import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DefaultPage } from '../default/default';

@Component({
    selector: 'settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    category: any;
    picklimit: any;
    /*banlimit*/
    constructor(public navCtrl: NavController) {
        this.getDefaults();
    }
    getDefaults() {
        if (localStorage.getItem('category') != null) {
            this.category = localStorage.getItem('category');
        } else {
            this.category = 'unique';
        }
        if (localStorage.getItem('picklimit') != null) {
            this.picklimit = localStorage.getItem('picklimit');
        } else {
            this.picklimit = 2;
        }
        /*if (localStorage.getItem('banlimit') != null) {
            this.banlimit = localStorage.getItem('banlimit');
        } else {
            this.banlimit = 2;
        }*/
    }
    setDefaults() {
        localStorage.setItem('category', this.category);
        localStorage.setItem('picklimit', this.picklimit);
        //localStorage.setItem('banlimit', this.picklimit);
        this.navCtrl.push(DefaultPage);
        location.reload();
    }
}
