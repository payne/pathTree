import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable} from "rxjs";
import { switchMap } from "rxjs";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit{
  q: string | null = '';
  questions = [
    {id: 1, title: "What is your name?"},
    {id:2, title:"What is your quest?"},
    {id:3, title:"What is your favorite color?"}];
 constructor(private route: ActivatedRoute ) {
 }

  ngOnInit(): void {
   this.q = this.route.snapshot.paramMap.get('q');
    console.log(`q=${this.q}`);

   /*
    this.route.paramMap.subscribe(params => {
      this.q = params.get('id');
      console.log(`q=${this.q}`);
    });
    */
  }

}
