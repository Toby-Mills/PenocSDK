import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {OEventModel} from '../models/oevent.model';
import { ApiService } from '../services/api.service';

@Injectable()
export class OEventService {

    constructor( private apiService: ApiService) {
     }

    getOEvent(oeventId?: Number, name?: String, venue?: String, dateFrom?: Date, dateTo?: Date): Observable<Response> {

         let url = '/OEvents?';
         if (oeventId != null) {url += 'id=' + oeventId; }
         if (name != null) {url += '&name=' + name; }
         if (venue != null) {url += '&venue=' + venue; }
         if (dateFrom != null) {url += '&dateFrom=' + dateFrom.getFullYear() + '-' + (dateFrom.getMonth() + 1) + '-' + dateFrom.getDate(); }
         if (dateTo != null) {url += '&dateTo=' + dateTo.getFullYear() + '-' + (dateTo.getMonth() + 1) + '-' + dateTo.getDate(); }

        return this.apiService.get(url);
    }

    putOEvent(oevent: OEventModel): Observable<Response> {
        return this.apiService.put('/OEvents/', JSON.stringify(oevent));
    }

    postOEvent(oevent: OEventModel): Observable<Response> {
        return  this.apiService.post('/OEvents/', JSON.stringify(oevent));
    }

    getOEventResultSummary(oeventId: Number, maximumResults?: Number): Observable<Response>{
        let url = '/OEvents/' + oeventId + '/resultSummary';
        if (maximumResults != null) {url += '?maximumResults=' + maximumResults; }
       return this.apiService.get(url);
    }

    getOEventResultSummaries(name?: String, venue?: String, dateFrom?: Date, dateTo?: Date, maximumResults?: Number): Observable<Response>{
        let url = '/resultSummaries';
        if (name != null) {url += '&name=' + name; }
        if (venue != null) {url += '&venue=' + venue; }
        if (dateFrom != null) {url += '&dateFrom=' + dateFrom.getFullYear() + '-' + (dateFrom.getMonth() + 1) + '-' + dateFrom.getDate(); }
        if (dateTo != null) {url += '&dateTo=' + dateTo.getFullYear() + '-' + (dateTo.getMonth() + 1) + '-' + dateTo.getDate(); }
        if (maximumResults != null) {url += '&maximumResults=' + maximumResults; }
       return this.apiService.get(url);
    }
}
