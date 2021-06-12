import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.models';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = "Question and Answer";
  questions: Question[] = [];
  index: number = 0;

  constructor(private sQuestion: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.sQuestion.getQuestions();
  }

  onNext(event: number){
    if(this.index < this.questions.length-1){
      this.index+=event;
    }
  }
  
}
