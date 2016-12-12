import { ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { UserService } from '../../providers/user/user.service';
export declare class AuthPage {
    private _data;
    private _user;
    private _cd;
    authStatus: boolean;
    message: string;
    private privateData;
    private isAuth;
    constructor(_data: DataService, _user: UserService, _cd: ChangeDetectorRef);
    ionViewDidLoad(): void;
}
