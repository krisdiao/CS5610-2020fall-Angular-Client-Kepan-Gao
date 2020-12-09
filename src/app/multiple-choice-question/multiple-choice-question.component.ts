import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {



constructor() { }

  // selectedChoice: {
  //   choice: ''
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

  // selectChoice = (choice) => {
  //   this.selectedChoice = choice;
  // }

  grade = () => { this.grading = true; };
  submitAnswer = () =>
    this.answerChange.emit(this.answer)

  ngOnInit(): void {
  }

}
