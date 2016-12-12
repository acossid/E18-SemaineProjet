import { Component, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { DataService } from '../../providers/data/data.service';
import { UserService } from '../../providers/user/user.service';
export var AuthPage = (function () {
    function AuthPage(_data, _user, _cd) {
        var _this = this;
        this._data = _data;
        this._user = _user;
        this._cd = _cd;
        this.isAuth = new BehaviorSubject(false);
        this.privateData = new BehaviorSubject('');
        this.isAuth.subscribe(function (val) { return _this.authStatus = val; });
        this.privateData.subscribe(function (val) { return _this.message = val; });
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._user.auth.onAuthStateChanged(function (user) {
            _this.isAuth.next(!!user);
            _this._cd.detectChanges();
            _this._data.db.child('/private').on('value', function (data) {
                _this.privateData.next(data.val());
                _this._cd.detectChanges();
            }, function (err) { return console.log(err); });
        });
    };
    AuthPage.decorators = [
        { type: Component, args: [{
                    templateUrl: './auth.html',
                },] },
    ];
    /** @nocollapse */
    AuthPage.ctorParameters = [
        { type: DataService, },
        { type: UserService, },
        { type: ChangeDetectorRef, },
    ];
    return AuthPage;
}());
//# sourceMappingURL=auth.js.map