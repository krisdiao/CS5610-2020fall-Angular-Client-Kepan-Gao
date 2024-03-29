import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/ModuleService';
import { CourseListComponent } from './course-list/course-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {LessonService} from '../services/LessonService';
import {TopicService} from '../services/TopicService';
import { QuizzesServiceClient } from 'src/services/quiz.service.client';
import { QuestionsServiceClient } from 'src/services/question.service.client';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseListComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent,
    // ModuleListComponent,
    // LessonTabsComponent,
    // TopicPillsComponent,
    // WidgetListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    CourseService,
    // ModuleService,
    // LessonService,
    // TopicService,
    QuizzesServiceClient,
    QuestionsServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
