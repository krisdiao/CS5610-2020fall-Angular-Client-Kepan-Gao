import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/ModuleService';
import {CourseService} from '../../services/course-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courses = [];
  courseId = '';
  modules = [];
  moduleId = '';

  constructor(private moduleService: ModuleService,
              private activeRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      const courseId = params.cid;
      if (typeof courseId !== 'undefined'){
        this.courseId = courseId;
        this.moduleId = params.mid;
        this.moduleService.findModulesForCourse(courseId)
          .then(modules => this.modules = modules);
      }
    });

  }

}
