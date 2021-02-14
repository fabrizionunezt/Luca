import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { QuestionInt } from 'src/app/models/questionInt.model';
import { User } from 'src/app/models/user.model';
import { QuestionAnswer } from 'src/app/models/questionAnswer.model';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  listQuestions: QuestionInt[] = [];
  popularity: boolean = false;
  new: boolean = false;
  following: boolean = false;
  constructor(private svcQuestions: QuestionsService, private svcShared: SharedService, private router: Router) {
    //Harcode log in user
    this.svcShared.user._id ='6028c8433758751b2c49459f';
    this.svcShared.subject._id='6028c1bb5180a114fcdc2755';
    this.chargeListQuestions();
  }
  //this method brings all the questions to be show
  chargeListQuestions(){
    this.svcQuestions.getQuestionList(this.svcShared.user._id).subscribe(data => {
      if (data) {
        this.listQuestions = data;
        this.orderListByCondition('popularity');
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

  //this method filter by condition the questions
  orderListByCondition(condition: string) {
    this.resetNavigation();
    this.listQuestions = this.svcShared.listQuestions.length > 0 ? this.svcShared.listQuestions: this.listQuestions;
    switch (condition) {
      case 'new':
        this.new = true;
        this.listQuestions = this.listQuestions.sort((a, b) => a.question.registerDate < b.question.registerDate ? -1 : 1);
        break;
      case 'popularity':
        this.popularity = true;
        this.listQuestions = this.listQuestions.sort((a, b) => a.question.answers.length > b.question.answers.length ? -1 : 1);
        break;
      case 'following':
        this.following = true;
        if(this.svcShared.listQuestions.length == 0){
          this.svcShared.listQuestions = this.listQuestions;
        }
        this.listQuestions = this.listQuestions.filter(x => x.following == true);
        break;

      default:
        break;
    }

  }

  resetNavigation(){
    this.popularity = false;
    this.new = false;
    this.following = false;
  }

  //redirect
  newQuestion(){
    this.router.navigateByUrl('community/ask');
  }
}
