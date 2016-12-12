import { Component } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
export var BasicPage = (function () {
    function BasicPage(_data) {
        this._data = _data;
    }
    BasicPage.prototype.ionViewDidEnter = function () {
        // this can probably be improved with observables
        Promise.all([this.fetchMessage(), this.fetchDirect()]);
    };
    BasicPage.prototype.fetchMessage = function () {
        var _this = this;
        return new Promise(function (res) {
            // this method...
            _this._data.db.child('static').on('value', function (data) {
                _this.message = data.val();
                res();
            });
        });
    };
    BasicPage.prototype.fetchDirect = function () {
        var _this = this;
        return new Promise(function (res) {
            // ...fetches the same data as this method
            _this._data.staticData.on('value', function (data) {
                _this.direct = data.val();
                res();
            });
        });
    };
    BasicPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-basic-demo',
                    templateUrl: 'basic-demo.html'
                },] },
    ];
    /** @nocollapse */
    BasicPage.ctorParameters = [
        { type: DataService, },
    ];
    return BasicPage;
}());
//# sourceMappingURL=basic-demo.js.map