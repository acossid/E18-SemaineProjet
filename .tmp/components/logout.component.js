import { Component } from '@angular/core';
import { UserService } from '../providers/user/user.service';
export var LogoutComponent = (function () {
    function LogoutComponent(_user) {
        this._user = _user;
    }
    LogoutComponent.prototype.logout = function () {
        this._user.logout();
    };
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'logout',
                    template: "<button (click)='logout()' ion-button>Logout</button>",
                    providers: [UserService]
                },] },
    ];
    /** @nocollapse */
    LogoutComponent.ctorParameters = [
        { type: UserService, },
    ];
    return LogoutComponent;
}());
//# sourceMappingURL=logout.component.js.map