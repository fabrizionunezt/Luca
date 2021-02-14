import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ImageUrl } from 'src/app/models/Enums/imageUrl.enum';
import { QuestionInt } from 'src/app/models/questionInt.model';
import { Subject } from 'src/app/models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  user: User = new User();
  subject: Subject = new Subject();
  listQuestions: QuestionInt[]=[];
  constructor() { }

  //this method use the name of the icon and the state  and return full url off image
  getImageUrl(name: string, state: Boolean) {
    var imageUrl = '';
    switch (name) {
      case 'thumbs-up':
        imageUrl = state ? ImageUrl.LIKEDACT : ImageUrl.LIKED;
        break;
      case 'thumbs-down':
        imageUrl = state ? ImageUrl.DISLIKEACT : ImageUrl.DISLIKE;
        break;
      case 'star':
        imageUrl = state ? ImageUrl.FOLLOWINGACT : ImageUrl.FOLLOWING;
        break;

      default:
        break;
    }
    return imageUrl;
  }
}
