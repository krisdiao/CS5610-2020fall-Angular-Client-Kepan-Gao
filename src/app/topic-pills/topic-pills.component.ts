import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../../services/TopicService';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  courseId = '';
  moduleId = '';
  lessonId = '';
  topics = [];
  topicId = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private topicService: TopicService,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      const courseId = params.cid;
      if (typeof courseId !== 'undefined'){
        this.courseId = courseId;
        this.moduleId = params.mid;
        this.lessonId = params.lid;
        this.topicId = params.tid;
        this.topicService.findTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    });
  }

}
