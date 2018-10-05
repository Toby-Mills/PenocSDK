import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/api.service';

@Injectable()
export class UploadService {
    constructor(private apiService: ApiService){}

    uploadNewsImage(fileToUpload: any): Observable<Response>  {
        let input = new FormData();
        input.append('file', fileToUpload);

        return this.apiService.post('/newsItems/images', input);
    }
}
