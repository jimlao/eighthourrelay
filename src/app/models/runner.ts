import firebase from 'firebase/compat/app';
export interface IRunner {
    id : string;
    email : string | null;
    isRegistered : boolean;
    isCaptian : boolean;
    team : string;
}

export class Runner implements IRunner {
    id: string = '';
    email: string | null = null;
    isRegistered: boolean = false;
    isCaptian: boolean = false;
    team: string = '';
    
    constructor(user: firebase.User)
    {
        this.id = user.uid;
        this.email = user.email;
        this.isRegistered  = false;
        this.isCaptian = false;
        this.team = '';
    }
}