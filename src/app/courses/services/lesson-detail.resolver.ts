import { CoursesService } from './courses.service';
import { LessonDetail } from './../model/lesson-detail';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail>{
    constructor(private course:CoursesService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail>{
        const courseUrl=route.parent.paramMap.get("courseUrl"),
        lessonSeqNo=route.paramMap.get("lessonSeqNo");
        return this.course.loadLessonDetail(courseUrl,lessonSeqNo);
    
    }
}