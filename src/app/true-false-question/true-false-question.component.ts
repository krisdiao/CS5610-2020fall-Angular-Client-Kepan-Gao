import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  // selectedAnswer: {
  //   answer: ''
  // };

  @Input()
  question = {_id: '', title: '', type: '', choices: [], correct: '', question: ''};
  @Input()
  answer = '';

  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;

  @Output()
  answerChange = new EventEmitter<string>();

  // selectAnswer = (answer) => {
  //   this.selectedAnswer = answer;
  // }

  grade = () => { this.grading = true; };
  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  constructor() { }

  ngOnInit(): void {
  }

}
