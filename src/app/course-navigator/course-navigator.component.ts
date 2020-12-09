import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ModuleService} from '../../services/ModuleService';
import {LessonService} from '../../services/LessonService';
import {TopicService} from '../../services/TopicService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  // modules = [];
  // lessons = [];
  // topics = [];
  // widgets = [];
  // selectedCourse = {
  //   title: ''
  // };
  // selectedModule = {
  //   title: ''
  // };
  // selectedLesson = {
  //   title: ''
  // };

  createCourse = () =>
    this.courseService.createCourse()
      .then(course => this.courses.push(course))

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses = this.courses.filter(c => c._id !== course._id))

  editCourse = (course) =>
    course.editing = true

  saveCourse = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  // selectCourse = (course) => {
  //   this.selectedCourse = course ;
  //   this.moduleService.findModulesForCourse(course._id)
  //     .then(modules => this.modules = modules);
  // }

  // createModuleForCourse = (selectedCourse) =>
  //   this.moduleService.createModuleForCourse(selectedCourse._id)
  //     .then (module => this.modules.push(module))
  //
  // deleteModule = (module) =>
  //   this.moduleService.deleteModules(module._id)
  //     .then(status => this.modules = this.modules.filter(m => m._id !== module._id))
  //
  // saveModule = (module) =>
  //   this.moduleService.updateModule(module)
  //     .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))
  //
  // selectModule = (module) => {
  //   this.selectedModule = module;
  //   this.lessonService.findLessonsForModule(module._id)
  //     .then(lessons => this.lessons = lessons);
  // }
  //
  // createLessonForModule = (selectedModule) =>
  //   this.lessonService.createLessonForModule(selectedModule._id)
  //     .then (lesson => this.lessons.push(lesson))
  //
  // deleteLesson = (lesson) =>
  //   this.lessonService.deleteLessons(lesson._id)
  //     .then(status => this.lessons = this.lessons.filter(l => l._id !== lesson._id))
  //
  // selectLesson = (lesson) => {
  //   this.selectedLesson = lesson;
  //   this.topicService.findTopicsForLesson(lesson._id)
  //     .then(topics => this.topics = topics);
  // }
  //
  // createTopicForLesson = (selectedLesson) =>
  //   this.topicService.createTopicForLesson(selectedLesson._id)
  //     .then (topic => this.topics.push(topic))
  //
  // deleteTopic = (topic) =>
  //   this.topicService.deleteTopics(topic._id)
  //     .then(status => this.topics = this.topics.filter(t => t._id !== topic._id))

  constructor(private courseService: CourseService,
              // private moduleService: ModuleService,
              // private lessonService: LessonService,
              // private topicService: TopicService,
  ) { }

  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
