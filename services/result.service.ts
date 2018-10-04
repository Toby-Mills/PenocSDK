import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ResultModel } from '../models/result.model';
import { ApiService } from '../services/api.service';

@Injectable()
export class ResultService {

    constructor(private apiService: ApiService) {
     }

    getCourseResults(idCourse: Number): Observable<Response>{
        return this.apiService.get('/Courses/' + idCourse + '/Results');
    }

    putResult(result: ResultModel): Observable<Response>{
        return this.apiService.put('/Results/', JSON.stringify(result));
    }

    postResult(result: ResultModel): Observable<Response> {
        return this.apiService.post('/Results/', JSON.stringify(result));
    }

    putCourseResults(courseId: number, results: ResultModel[]): Observable<Response> {
        return this.apiService.put( '/Courses/' + courseId + '/Results', JSON.stringify(results));
    }
}
