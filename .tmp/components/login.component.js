import { Component } from '@angular/core';
import { UserService } from '../providers/user/user.service';
export var LoginComponent = (function () {
    function LoginComponent(_user) {
        this._user = _user;
    }
    LoginComponent.prototype.login = function () {
        this._user.login(this.userEmail, this.userPassword);
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'login',
                    template: "\n    <h3>Login to see some stuff using these creds:</h3>\n    <dl>\n    <dt>Email:</dt>\n    <dd>cave@aperture.com</dd>\n    <dt>Password:</dt>\n    <dd>notneverbutnow</dd>\n    </dl>\n    <form (ngSubmit)=\"login()\">\n        <ion-list>\n            <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input [(ngModel)]=\"userEmail\"\n                           type=\"email\" name=\"userEmail\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input [(ngModel)]=\"userPassword\"\n                           type=\"password\" name=\"userPassword\"></ion-input>\n            </ion-item>\n\n            <hr/>\n            <button type=\"submit\" ion-button>Login!</button>\n        </ion-list>\n    </form>"
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = [
        { type: UserService, },
    ];
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map