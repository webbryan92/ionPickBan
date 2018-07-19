webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Navbar } from 'ionic-angular';
var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, params, alertCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.alertCtrl = alertCtrl;
        this.pickSequ = 1;
        this.params = params;
        this.stages = params.data.results;
        this.splitStages(this.stages);
    }
    ResultsPage.prototype.splitStages = function (stages) {
        this.randomized = stages.splice(-2, 2);
        this.shuffleArray(this.randomized);
        this.stages = this.stages.concat(this.randomized);
        this.stages.pop();
    };
    // -> Fisher–Yates shuffle algorithm
    ResultsPage.prototype.shuffleArray = function (array) {
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
    };
    ResultsPage.prototype.pickOrder = function () {
        this.returnNum = this.pickSequ;
        this.pickSequ++;
        return this.returnNum;
    };
    ResultsPage.prototype.closeButton = function () {
        var _this = this;
        // todo something 
        var alert = this.alertCtrl.create({
            title: 'Return to pick screen and reset?',
            message: '',
            buttons: [
                {
                    text: 'cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Return',
                    handler: function () {
                        _this.navCtrl.pop();
                        location.reload();
                    }
                }
            ]
        });
        alert.present();
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"C:\Projects\ionpickban\src\pages\results\results.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="closeButton()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title align-center>\n\n      Results\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="content">\n\n  <!-- <h1 align="center">Results</h1> -->\n\n  <ion-grid>\n\n    <ion-row justify-content-center>\n\n      <ng-container *ngFor="let stage of stages; let i = index">\n\n        <ion-col tappable align="center" class=\'my-thin-col\'>\n\n          <figure>\n\n            <div>\n\n              <img width="128" height="128" src="{{stage.imgsrc}}" onerror="this.src = `assets/imgs/error.png`" class="stageimg">\n\n            </div>\n\n            <figcaption [hidden]="!stage.hideme" align="center" class="pickformat">{{i+1}}</figcaption>\n\n          </figure>\n\n          <ng-container>\n\n            <p class="stagename">{{stage.name}}</p>\n\n            <p class="stagename">{{stage.jpname}}</p>\n\n          </ng-container>\n\n        </ion-col>\n\n      </ng-container>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Projects\ionpickban\src\pages\results\results.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_default__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    /*banlimit*/
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.getDefaults();
    }
    SettingsPage.prototype.getDefaults = function () {
        if (localStorage.getItem('category') != null) {
            this.category = localStorage.getItem('category');
        }
        else {
            this.category = 'unique';
        }
        if (localStorage.getItem('picklimit') != null) {
            this.picklimit = localStorage.getItem('picklimit');
        }
        else {
            this.picklimit = 2;
        }
        /*if (localStorage.getItem('banlimit') != null) {
            this.banlimit = localStorage.getItem('banlimit');
        } else {
            this.banlimit = 2;
        }*/
    };
    SettingsPage.prototype.setDefaults = function () {
        localStorage.setItem('category', this.category);
        localStorage.setItem('picklimit', this.picklimit);
        //localStorage.setItem('banlimit', this.picklimit);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__default_default__["a" /* DefaultPage */]);
        location.reload();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'settings',template:/*ion-inline-start:"C:\Projects\ionpickban\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            Settings\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form (submit)="setDefaults()">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label fixed>Pick Phase</ion-label>\n\n                <ion-select [(ngModel)]="category" name="category">\n\n                    <ion-option value="unique">All Unique</ion-option>\n\n                    <ion-option value="teamUnique">Team Unique</ion-option>\n\n                    <ion-option value="repeats">Repeats OK</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label fixed>Picks</ion-label>\n\n                <ion-select [(ngModel)]="picklimit" name="picklimit">\n\n                    <ion-option value="2">2</ion-option>\n\n                    <ion-option value="3">3</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <!--<ion-item>\n\n                <ion-label fixed>Bans</ion-label>\n\n                    <ion-select [(ngModel)]="banlimit" name="banlimit">\n\n                        <ion-option value="1">1</ion-option>\n\n                        <ion-option value="2">2</ion-option>\n\n                        <ion-option value="3">3</ion-option>\n\n                        <ion-option value="4">4</ion-option>\n\n                        <ion-option value="5">5</ion-option>\n\n                    </ion-select>\n\n                </ion-item>-->\n\n            <button ion-button type="submit" block>Save Changes</button>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Projects\ionpickban\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_default_default__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_results_results__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_default_default__["a" /* DefaultPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_results_results__["a" /* ResultsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_default_default__["a" /* DefaultPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_results_results__["a" /* ResultsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_default_default__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_default_default__["a" /* DefaultPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Stage Select', component: __WEBPACK_IMPORTED_MODULE_4__pages_default_default__["a" /* DefaultPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Projects\ionpickban\src\app\app.html"*/'<ion-menu [content]="content">\n\n        <ion-header>\n\n          <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n          </ion-toolbar>\n\n        </ion-header>\n\n      \n\n        <ion-content>\n\n          <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n        </ion-content>\n\n      \n\n      </ion-menu>\n\n      \n\n      <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Projects\ionpickban\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STAGES; });
var STAGES = [
    {
        stageId: 0,
        name: 'Tutorial Stage',
        jpname: 'チュートリアルステージ',
        imgsrc: 'assets/imgs/tutorial.png'
    },
    {
        stageId: 1,
        name: 'Torrington Training Grounds',
        jpname: 'トリントン演習場',
        imgsrc: 'assets/imgs/torrington.png'
    },
    {
        stageId: 2,
        name: 'Tekkadan Base',
        jpname: '鉄華団基地',
        imgsrc: 'assets/imgs/tekkadan.png'
    },
    {
        stageId: 3,
        name: 'ThunderBolt Sector',
        jpname: 'サンダーボルト宙域',
        imgsrc: 'assets/imgs/thunderbolt.png'
    },
    {
        stageId: 4,
        name: 'City (New Hong Kong)',
        jpname: 'ニューホンコン',
        imgsrc: 'assets/imgs/hongKong.png'
    },
    {
        stageId: 5,
        name: 'Jaburo',
        jpname: 'ジャブロー',
        imgsrc: 'assets/imgs/jaburo.png'
    },
    {
        stageId: 6,
        name: 'Abandoned Colony',
        jpname: '廃棄コロニー',
        imgsrc: 'assets/imgs/aColony.png'
    },
    {
        stageId: 7,
        name: 'Solomon Sector',
        jpname: 'ソロモン宙域',
        imgsrc: 'assets/imgs/solomon.png'
    },
    {
        stageId: 8,
        name: 'Bequest Island',
        jpname: 'ビクエスト島',
        imgsrc: 'assets/imgs/island.png'
    },
    {
        stageId: 9,
        name: 'Asteroid',
        jpname: '小惑星',
        imgsrc: 'assets/imgs/asteroid.png'
    },
    {
        stageId: 10,
        name: 'Lunar Surface',
        jpname: '月面',
        imgsrc: 'assets/imgs/moon.png'
    },
    {
        stageId: 10,
        name: 'Forest',
        jpname: '森林(昼間)',
        imgsrc: 'assets/imgs/forest.png'
    },
    {
        stageId: 11,
        name: 'Inside Colony Laser',
        jpname: 'コロニーレーザー内部',
        imgsrc: 'assets/imgs/colonyLaser.png'
    },
    {
        stageId: 12,
        name: 'Colony City',
        jpname: 'コロニー市街地',
        imgsrc: 'assets/imgs/colonyCity.png'
    },
    {
        stageId: 10,
        name: 'Minsry',
        jpname: 'ミンスリー',
        imgsrc: 'assets/imgs/minsry.png'
    }
];
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_results__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DefaultPage = /** @class */ (function () {
    function DefaultPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.stages = __WEBPACK_IMPORTED_MODULE_2__services_storage__["a" /* STAGES */];
        this.pickphase = "ban";
        this.picknumber = "A";
        this.count = 0;
        this.undo = 0;
        this.turns = [];
        this.turnIndex = 0;
        this.results = [];
        this.getDefaults();
        //set the appropriate turn order based on default picklimit
        if (this.picklimit == 2) {
            this.turns = ["1", "2", "2", "1", "2", "1"];
            this.teamTurn = this.turns[0];
        }
        else if (this.picklimit == 3) {
            this.turns = ["1", "2", "2", "1", "2", "1", "2", "1"];
            this.teamTurn = this.turns[0];
        }
        //default allowUndo to false
        this.allowUndo = false;
    }
    DefaultPage.prototype.getDefaults = function () {
        //get the default values from localStorage
        this.category = localStorage.getItem('category') || 'unique';
        this.picklimit = localStorage.getItem('picklimit') || 2;
    };
    //handle click event on a stage
    DefaultPage.prototype.handleClick = function (stage, index) {
        switch (this.category) {
            case 'unique':
                if (!this.outOfBounds(this.picknumber) && !stage.used) {
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
                        this.addToResults(stage);
                    }
                    stage.hideme = !stage.hideme;
                    //switch team
                    this.turnIndex = this.turnIndex + 1;
                    this.handleTurn();
                    if (this.outOfBounds(this.picknumber)) {
                        this.presentConfirm();
                    }
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
                        this.addToResults(stage);
                    } //switch team
                    this.turnIndex = this.turnIndex + 1;
                    this.handleTurn();
                    if (this.outOfBounds(this.picknumber)) {
                        this.presentConfirm();
                    }
                }
                break;
            case 'repeats':
                //check if the number is out of bounds
                if (!this.outOfBounds(this.picknumber)) {
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
                        if (stage.pickNum == null) {
                            stage.pickNum = this.picknumber;
                            this.picknumber = this.nextChar(this.picknumber);
                            stage.hideme = !stage.hideme;
                        }
                        else {
                            //the updates on the addition to the html property 
                            //has response time issues
                            stage.pickNum = stage.pickNum + ' ' + this.picknumber;
                            this.picknumber = this.nextChar(this.picknumber);
                        }
                        //stage.used = true;
                        this.undo = stage;
                        this.undoIndex = index;
                        this.addToResults(stage);
                    }
                    //switch team
                    this.turnIndex = this.turnIndex + 1;
                    this.handleTurn();
                    if (this.outOfBounds(this.picknumber)) {
                        this.presentConfirm();
                    }
                }
                break;
        }
    };
    DefaultPage.prototype.restoreElement = function () {
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
    };
    DefaultPage.prototype.presentConfirm = function () {
        var _this = this;
        //menu to give user one last chance to undo a selection before moving to results
        var alert = this.alertCtrl.create({
            title: 'Confirm Selection',
            message: '',
            buttons: [
                {
                    text: 'Undo',
                    role: 'undo',
                    handler: function () {
                        //call the undo function to restore the element
                        _this.restoreElement();
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.allowUndo = false;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__results_results__["a" /* ResultsPage */], { results: _this.results });
                    }
                }
            ]
        });
        alert.present();
    };
    DefaultPage.prototype.resetConfirm = function () {
        var _this = this;
        //confirmation window for resetting the page
        var alert = this.alertCtrl.create({
            title: 'Reset?',
            message: '',
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: function () {
                        //run nothing and exit out of window
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        //trigger reset function
                        _this.reset();
                    }
                }
            ]
        });
        alert.present();
    };
    DefaultPage.prototype.checkTurn = function (stage) {
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
    };
    DefaultPage.prototype.undoUnique = function () {
        //if banphase
        if (this.pickphase == "ban") {
            if (this.undo !== 0) {
                this.stages.splice(this.undoIndex, 0, this.undo); //remove stage from the list
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
            this.undo.pickNum = null; //take away pickNum given
            this.undo.phase = null; //??
            this.undo.used = false; //flag item as unused
            this.undo.hideme = !this.undo.hideme; //flip the hidden text property to re-hide
            this.count = this.count - 1; //reduce count of actions for determining pick/ban
            this.allowUndo = false; //Don't allow another undo
            this.turnIndex = this.turnIndex - 1; //reset the index of whose turn it is.
            this.handleTurn(); //undo turn order
            this.undoResults();
        }
    };
    DefaultPage.prototype.undoTeamUnique = function () {
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
    };
    DefaultPage.prototype.undoRepeats = function () {
        //if banphase
        if (this.pickphase == "ban") {
            if (this.undo !== 0) {
                //reinsert the deleted item into the stage list
                this.stages.splice(this.undoIndex, 0, this.undo);
            }
            //this.undo.hideme = !this.undo.hideme;
            this.count = this.count - 1; //decrement pick/ban phase counter
            this.allowUndo = false;
            //set turn back
            this.turnIndex = this.turnIndex - 1; //decrement the index selecting turns
            this.handleTurn();
        }
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
    };
    DefaultPage.prototype.pickBanTurn = function () {
        //once 2 bans are made switch to pickphase
        if (this.count > 2) {
            this.pickphase = "pick";
        }
    };
    DefaultPage.prototype.removeItem = function (stage, index) {
        this.stages.splice(index, 1);
    };
    DefaultPage.prototype.addToResults = function (stage) {
        //add most stage item click to the results
        this.results.push(stage);
    };
    DefaultPage.prototype.undoResults = function () {
        //pop the most recent item added to the results object
        this.results.pop();
    };
    DefaultPage.prototype.phase = function (phase) {
        //check to see if the page is set to pick
        if (phase === "pick") {
            return true;
        }
    };
    DefaultPage.prototype.nextChar = function (c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    };
    DefaultPage.prototype.prevChar = function (c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    };
    DefaultPage.prototype.outOfBounds = function (p) {
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
    };
    DefaultPage.prototype.reset = function () {
        //refresh the webpage
        location.reload();
    };
    DefaultPage.prototype.teamUsed = function (stage) {
        //if the team has used the stage, do not allow them to reselect
        return (this.teamTurn == '1' && stage.team1Used === true) ||
            (this.teamTurn == '2' && stage.team2Used === true);
    };
    DefaultPage.prototype.handleTurn = function () {
        //sets the html display variable
        this.turns[this.turnIndex] == "1" ? this.teamTurn = 1 : this.teamTurn = 2;
    };
    DefaultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-default',template:/*ion-inline-start:"C:\Projects\ionpickban\src\pages\default\default.html"*/'<ion-header>\n\n  <!--<ion-navbar>\n\n    <button ion-button menuToggle >\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Picks/Bans</ion-title>\n\n  </ion-navbar>-->\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n  <h1>\n\n    <ng-container *ngIf="count>=2">\n\n        <ng-container [ngSwitch]= "teamTurn">\n\n            <ng-container *ngSwitchCase="1">\n\n              <div [hidden]="!teamTurn == \'1\'" align="center" class ="t1">Team 1 Pick</div>\n\n            </ng-container>\n\n            <ng-container *ngSwitchCase="2">\n\n              <div [hidden]="!teamTurn == \'2\'" align="center" class ="t2">Team 2 Pick</div>\n\n            </ng-container>\n\n          </ng-container>\n\n    </ng-container>\n\n    <ng-container *ngIf="count<2">\n\n        <ng-container [ngSwitch]= "teamTurn">\n\n            <ng-container *ngSwitchCase="1">\n\n              <div [hidden]="!teamTurn == \'1\'" align="center" class ="t1">Team 1 Ban</div>\n\n            </ng-container>\n\n            <ng-container *ngSwitchCase="2">\n\n              <div [hidden]="!teamTurn == \'2\'" align="center" class ="t2">Team 2 Ban</div>\n\n            </ng-container>\n\n          </ng-container>\n\n    </ng-container>      \n\n  </h1>\n\n  <ion-grid>\n\n    <ion-row justify-content-center>\n\n      <ng-container *ngFor="let stage of stages; let i = index">\n\n        <ion-col tappable  (click)="handleClick(stage, i)" align="center" class=\'my-thin-col\'>\n\n          <figure>\n\n              <div>\n\n                  <img width="128" height="128" src="{{stage.imgsrc}}" onerror="this.src = `assets/imgs/error.png`" class="stageimg">\n\n                </div>\n\n                <ng-container *ngIf="phase(stage.phase)">\n\n                  <figcaption [hidden]="!stage.hideme" align="center" class="pickformat">{{stage.pickNum}}</figcaption>\n\n                </ng-container>\n\n          </figure>          \n\n          <ng-container>\n\n            <p class="stagename">{{stage.name}}</p>\n\n            <p class="stagename">{{stage.jpname}}</p>\n\n          </ng-container>          \n\n        </ion-col>\n\n      </ng-container>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div align="center">\n\n  <button ion-button menuToggle>Menu</button>\n\n  <ng-container *ngIf="allowUndo">\n\n    <button ion-button (click) = "restoreElement()">Undo</button>\n\n  </ng-container>\n\n  <ng-container *ngIf="!allowUndo">\n\n    <button ion-button color = "danger">Undo</button>\n\n  </ng-container>\n\n  \n\n  <button ion-button (click) = "resetConfirm()">Reset</button>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\Projects\ionpickban\src\pages\default\default.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DefaultPage);
    return DefaultPage;
}());

//# sourceMappingURL=default.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map