export declare class UserService {
    auth: any;
    constructor();
    login(userEmail: string, userPassword: string): Promise<{}>;
    logout(): any;
}
