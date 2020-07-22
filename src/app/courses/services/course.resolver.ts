import { CoursesService } from './courses.service';
import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<Course>{
    constructor(private courses:CoursesService){

    }
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Course>{
        const courseUrl=route.paramMap.get("courseUrl");
        return this.courses.loadCourseByUrl(courseUrl);
       /*  .pipe(first());//It will take first value from the observable but here we know it will give 1 value */
    }
}