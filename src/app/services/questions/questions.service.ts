import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { QuestionInt } from 'src/app/models/questionInt.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  endpoint: string;
  constructor( private client: HttpClient) {
    this.endpoint = environment.apiUrl+'/question';
  }

  getQuestionList(idUser: string){  //6028c8433758751b2c49459f
    return this.client.get<QuestionInt[]>(`${this.endpoint}/getList/${idUser}`);
  }

  updateQuestionInteract(question: QuestionInt,idUser: string){
    return this.client.post<any>(`${this.endpoint}/saveQuestionInt/${idUser}`,question);
  }
  saveQuestion(question: Question){
    return this.client.post<any>(`${this.endpoint}/saveQuestion`,question);
  }
}
