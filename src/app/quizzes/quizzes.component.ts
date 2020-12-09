import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizzesServiceClient} from '../../services/quiz.service.client';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  courses = [];
  courseId = '';
  quizzes = [];
  quizId = '';
  JSON = null;

  constructor(private quizService: QuizzesServiceClient, private route: ActivatedRoute) {
    this.JSON = JSON;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.quizService.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });

  }

}
