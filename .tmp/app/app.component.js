import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { DataService } from '../providers/data/data.service';
export var MyApp = (function () {
    function MyApp(platform, data) {
        this.rootPage = TabsPage;
        platform.ready().then(function () {
            data.init();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
    MyApp.decorators = [
        { type: Component, args: [{
                    //template: `COLIN`
                    template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: DataService, },
    ];
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map