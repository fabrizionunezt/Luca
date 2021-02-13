import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { ContentComponent } from './components/shared/content/content.component';
import { CommunityComponent } from './components/pages/community/community.component';
import { PostQuestionComponent } from './components/pages/community/post-question/post-question.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MinQuestionComponent } from './components/pages/community/min-question/min-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopNavComponent,
    ContentComponent,
    CommunityComponent,
    PostQuestionComponent,
    NotFoundComponent,
    MinQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
