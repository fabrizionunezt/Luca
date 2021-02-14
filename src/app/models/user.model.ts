export class User{
    _id: string;
    name: string;
    scoreFire: number;
    scorePolice: number;
    scoreFlower: number;

    constructor(){
        this._id = '';
        this.name = '';
        this.scoreFire = 0;
        this.scorePolice = 0;
        this.scoreFlower = 0;
    }
}
