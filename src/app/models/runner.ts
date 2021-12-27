import firebase from 'firebase/compat/app';
//import { Interface } from 'readline';
export interface IRunner {
    id : string;
    email : string | null;
    isRegistered : boolean;
    isRegistering: boolean;
    isCaptian : boolean;
    team : string;
}

export class Runner implements IRunner {
    id: string = '';
    email: string | null = null;
    isRegistered: boolean = false;
    isRegistering: boolean = false;
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


export class DataStore {
    public static teams: ITeam[] = [];
}

export interface ITeam {
    name: string;
    runners: IRunner[]
}

export class Team implements ITeam {
    public runners: IRunner[];

    constructor(public name: string)
    {
        this.runners= [];
    }
}
  