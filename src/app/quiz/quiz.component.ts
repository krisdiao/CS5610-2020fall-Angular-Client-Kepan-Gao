import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsServiceClient } from 'src/services/question.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes = [];
  quizId = '';
  questions = [];
  questionId = '';

  constructor(private questionService: QuestionsServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.questionService.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });

  }

}
