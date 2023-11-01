import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';
import { QuestionsComponent } from './questions/questions.component';


const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'answer', component: AnswerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
