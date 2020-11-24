import {Injectable} from '@angular/core';
const lessonUrl = 'https://wbdv-generic-server.herokuapp.com/api/kepangao/lessons';
const topicUrl = 'https://wbdv-generic-server.herokuapp.com/api/kepangao/topics';

@Injectable()
export class TopicService {
  findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
      .then(response => response.json())

  deleteTopics = (topicId) =>
    fetch(`${topicUrl}/${topicId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  createTopicForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
      method: 'POST',
      body: JSON.stringify({title: 'Newer Topic'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  //
  //
  // updateLesson = (lesson) =>
  //   fetch(`${lessonUrl}/${lesson._id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify(lesson),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())

}
