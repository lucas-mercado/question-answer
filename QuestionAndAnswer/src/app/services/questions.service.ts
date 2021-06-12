import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Answer } from '../models/answer.models';
import { Question } from '../models/question.models';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  
  private questions: Question[] = [
                            new Question('¿Cual es la Capital de Argentina?',
                            [
                              new Answer('Buenos Aires', true), 
                              new Answer('Cordoba',false),
                              new Answer('Santiago', false),
                              new Answer('Capiatl Federal', false)
                            ]),
                            new Question('¿Cual es la Capital de Francia?',
                            [
                              new Answer('Paris', true), 
                              new Answer('Monaco',false),
                              new Answer('FramFur', false),
                              new Answer('Saint', false)
                            ])
                          ]

  constructor() { }

  getQuestions(){
    return this.questions;
  }
}
