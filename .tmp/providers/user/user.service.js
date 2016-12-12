import { Injectable } from '@angular/core';
import firebase from 'firebase';
export var UserService = (function () {
    function UserService() {
        this.auth = firebase.auth();
    }
    UserService.prototype.login = function (userEmail, userPassword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.signInWithEmailAndPassword(userEmail, userPassword)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    UserService.prototype.logout = function () {
        return this.auth.signOut();
    };
    UserService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = [];
    return UserService;
}());
//# sourceMappingURL=user.service.js.map