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
