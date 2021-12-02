
export interface IRunner {
    email : string;
    isRegistered : boolean;
    isCaptian : boolean;
    team : string;
}

export class Runner implements IRunner {
    email: string = '';
    isRegistered: boolean = false;
    isCaptian: boolean = false;
    team: string = '';
    
    // constructor(email : string)
    // {
    //     this.email = email;
    //     this.isRegistered  = false;
    //     this.isCaptian = false;
    //     this.team = '';
    // }
}