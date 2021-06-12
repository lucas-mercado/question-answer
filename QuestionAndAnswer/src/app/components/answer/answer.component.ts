import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/models/answer.models';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer = new Answer();
  @Output() disabled: EventEmitter<boolean> = new EventEmitter<boolean>();
  valid: number = 2;

  constructor() { }
  
  ngOnInit(): void {
  }

  onClick(){
    if(this.answer.valid){
      this.valid = 1;
    }else{
      this.valid = 0;
    }
    this.disabled.emit(true);
  }

}
