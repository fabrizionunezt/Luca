import { User } from "./user.model";

export class QuestionAnswer{
    _id: string;
    user: User;
    answer: string;
    date: Date;
    constructor(){
        this._id = '';
        this.user = new User();
        this.answer = '';
        this.date = new Date();
    }
}
