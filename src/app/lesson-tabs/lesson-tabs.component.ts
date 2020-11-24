import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../services/ModuleService';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../services/LessonService';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  courseId = '';
  modules = [];
  moduleId = '';
  lessons = [];
  lessonId = '';

  constructor(
              private lessonService: LessonService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      const courseId = params.cid;
      if (typeof courseId !== 'undefined'){
        this.courseId = courseId;
        this.moduleId = params.mid;
        this.lessonId = params.lid;
        this.lessonService.findLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

}
