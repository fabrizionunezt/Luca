import { Subject } from "./subject.model";
import { QuestionAnswer } from "./questionAnswer.model";
import { User } from "./user.model";
export class Question{
  _id: string;
  subject: Subject;
  author: User;
  title: string;
  details: string;
  registerDate: Date;
  answers: QuestionAnswer[];
  constructor(){
    this._id = '';
    this.subject = new Subject();
    this.title = '';
    this.details = '';
    this.author = new User();
    this.answers = [];
    this.registerDate = new Date();
  }
}
