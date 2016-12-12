import { DataService } from '../../providers/data/data.service';
export declare class BasicPage {
    private _data;
    message: string;
    direct: string;
    constructor(_data: DataService);
    ionViewDidEnter(): void;
    private fetchMessage();
    private fetchDirect();
}
