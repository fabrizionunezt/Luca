
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './components/pages/community/community.component';
import { PostQuestionComponent } from './components/pages/community/post-question/post-question.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'community', component: CommunityComponent},
  { path: 'community/ask', component: PostQuestionComponent },
  { path: '', redirectTo: '/community', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
