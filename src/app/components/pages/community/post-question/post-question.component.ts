import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.scss']
})
export class PostQuestionComponent implements OnInit {

  title: string = '';
  details: string = '';
  constructor(
    private svcQuestion: QuestionsService,
    private svcShared: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveQuestion(){
    var question = new Question;
    question.author = this.svcShared.user;
    question.title = this.title;
    question.details = this.details;
    question.subject = this.svcShared.subject;

    if(question.title){
      this.svcQuestion.saveQuestion(question).subscribe(data =>{
        if(data){
          console.log(data);
          this.cancel();
        }
      },error => console.log(error));
    }
  }

  cancel(){
      this.router.navigateByUrl('community');
  }

}
