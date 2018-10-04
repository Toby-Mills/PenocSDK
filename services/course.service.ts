import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CourseModel } from '../models/course.model';
import { ApiService } from '../services/api.service';

@Injectable()
export class CourseService {


    constructor( private apiService: ApiService) {
     }

    getCourse(idCourse: Number): Observable<Response> {
        return this.apiService.get('/Courses/' + idCourse)
    }

    getEventCourses(idOEvent: Number): Observable<Response> {
        return this.apiService.get('/Oevents/' + idOEvent + '/Courses')
    }

    putCourse(course: CourseModel): Observable<Response> {
        return this.apiService.put('/Courses/', JSON.stringify(course))
    }

    postCourse(course: CourseModel): Observable<Response> {
        return this.apiService.post('/Courses/', JSON.stringify(course))
    }

    deleteCourse(courseId: Number): Observable<Response> {
        return this.apiService.delete('/Courses/' + courseId)
    }
}
