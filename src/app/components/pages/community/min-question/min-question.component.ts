import { Component, Input, OnInit } from '@angular/core';
import { QuestionInt } from 'src/app/models/questionInt.model';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-min-question',
  templateUrl: './min-question.component.html',
  styleUrls: ['./min-question.component.scss']
})
export class MinQuestionComponent implements OnInit {

  @Input() questionInt: QuestionInt = new QuestionInt();
  constructor(
    private svcShared: SharedService,
    private svcQuestion: QuestionsService
  ) { }

  ngOnInit(): void {
  }

  //get the last comment to be show
  getLatestAnswer() {
    if (this.questionInt.question.answers.length > 0) {
      var latestAnswer = this.questionInt.question.answers.sort((a, b) => (a.date < b.date ? -1 : 1));
      return latestAnswer[0].answer;
    }
    return '';

  }
  //this methods get the image url from enum
  getImageUrl(iconName: string, state: boolean) {
    var imageUrl = ''
    imageUrl = this.svcShared.getImageUrl(iconName, state);
    return imageUrl;
  }

  //this method change the states of the question
  updateStateQuestion(action: string) {

    switch (action) {
      case 'like':
        this.questionInt.liked = !this.questionInt.liked;
        this.questionInt.disliked = false;
        this.updateQuestionInteraction();
        break;
      case 'dislike':
        this.questionInt.liked = false;
        this.questionInt.disliked = !this.questionInt.disliked;
        this.updateQuestionInteraction();
        break;
      case 'follow':
        this.questionInt.following = !this.questionInt.following;
        this.updateQuestionInteraction();
        break;

      default:
        break;
    }
  }

  //this method update the interact with the questions in db
  updateQuestionInteraction() {
    console.log(this.questionInt);
    this.svcQuestion.updateQuestionInteract(this.questionInt, this.svcShared.user._id).subscribe(data => {
      if (data) {
        console.log(data);
      }
    }
    );
  }

}
