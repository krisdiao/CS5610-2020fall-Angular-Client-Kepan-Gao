import {Injectable} from '@angular/core';

@Injectable()

export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(`http://localhost:3000/quizzes`)
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`http://localhost:3000/quizzes/${qid}`)
      .then(response => response.json())
}
