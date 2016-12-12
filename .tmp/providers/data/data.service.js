import { Injectable } from '@angular/core';
import firebase from 'firebase';
export var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.init = function () {
        var fbConf = {
            apiKey: "AIzaSyBSVPfqp28DOralim2IdbyAyY2NuSgeoy0",
            authDomain: "testsense-ddb9b.firebaseapp.com",
            databaseURL: "https://testsense-ddb9b.firebaseio.com",
            storageBucket: "testsense-ddb9b.appspot.com",
            messagingSenderId: "996428475386"
        };
        firebase.initializeApp(fbConf);
        this.db = firebase.database().ref('/');
        this.staticData = firebase.database().ref('/static');
        this.privateData = firebase.database().ref('/private');
    };
    DataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = [];
    return DataService;
}());
//# sourceMappingURL=data.service.js.map