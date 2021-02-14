
import { User } from "./user.model";
import { Question } from "./question.model";

export class QuestionInt{
    _id: string;
    user: User;
    liked: boolean;
    disliked: boolean;
    following: boolean;
    question: Question;
    constructor(){
        this._id = '';
        this.liked = false;
        this.disliked = false;
        this.following = false;
        this.user = new User();
        this.question = new Question();
    }
}


