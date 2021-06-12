import {Answer} from '../models/answer.models';

export class Question{
    constructor(public question: string, public answers?: Answer[]){}
}