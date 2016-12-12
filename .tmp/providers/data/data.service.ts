/**
 * Created by colinjlacy on 6/5/16.
 */
import {Injectable} from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class DataService {
    public db: any;
    public staticData: any;
    public privateData: any;
    constructor() {}

    init() {
      const fbConf = {
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
    }
}
