import { UserService } from '../providers/user/user.service';
export declare class LoginComponent {
    private _user;
    userEmail: string;
    userPassword: string;
    constructor(_user: UserService);
    login(): void;
}
