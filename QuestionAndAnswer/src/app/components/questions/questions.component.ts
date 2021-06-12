import { Input, Output, EventEmitter, Component, OnInit, OnChanges } from '@angular/core';
import { Question } from 'src/app/models/question.models';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnChanges {
  
  title = "Question"
  @Input() question: Question = new Question('');
  @Output() next: EventEmitter<number> = new EventEmitter<number>();
  disabled: boolean = false;

  constructor() { }

  ngOnChanges():void{
    this.title = this.question.question;
  }

  onDisabled(event: boolean){
    this.disabled = event;
  }
  
  onClick(){
    if(this.disabled){
      this.next.emit(1);
      this.disabled=!this.disabled;
    }  
  }

}
