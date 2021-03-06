import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiService } from '../services/api.service';
import { ClubModel } from '../models/club.model';
import { VenueModel } from '../models/venue.model';

@Injectable()
export class LookupService {
    public genderList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    public technicalDifficultyList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    public clubList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    public venueList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);


    constructor(private apiService: ApiService) {

        this.getGenderList();
        this.getTechnicalDifficultyList();
        this.getClubList();
        this.getVenueList();
    }

    getVenueList(): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.get('/Venues')
        ).then(data => data.subscribe(
            response => {
                let venueData: Array<VenueModel> =  response.json();
                venueData.sort(function(a: VenueModel, b: VenueModel){
                    if (a.name === null) {a.name = ''; } ;
                    if (b.name === null) {b.name = ''; } ;
                    if ( a.name.toLowerCase() < b.name.toLowerCase() ) {return -1; };
                    if ( a.name.toLowerCase() > b.name.toLowerCase() ) {return 1; };
                    return 0;
                });
                this.venueList.next(venueData);
            }
        )).then(success => {return true; });
    }

    getClubList(): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.get('/Clubs')
        ).then(data => data.subscribe(
            response => {
                let clubData: Array<ClubModel> = response.json();
                clubData.sort(function(a: ClubModel, b: ClubModel){
                    if (a.shortName === null) {a.shortName = ''; } ;
                    if (b.shortName === null) {b.shortName = ''; } ;
                    if ( a.shortName.toLowerCase() < b.shortName.toLowerCase() ) {return -1; };
                    if ( a.shortName.toLowerCase() > b.shortName.toLowerCase() ) {return 1; };
                    return 0;
                });
                this.clubList.next(clubData);
            }
        )).then(success => {return true; });
    }

    postClub(club: ClubModel): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.post('/Clubs', JSON.stringify(club))
        ).then(data => {
                data.subscribe(response => {
                    this.getClubList();
                });
            }).then(data => { return true; });
    }

    putClub(club: ClubModel): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.put( '/Clubs', JSON.stringify(club))
        ).then(data => {
                data.subscribe(response => {
                    this.getClubList();
                });
            }).then(success => {return true; });
    }

    deleteClub(clubId: Number): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.delete( '/Clubs/' + clubId)
        ).then(data => {
                data.subscribe(response => {
                    this.getClubList();
                });
            }).then(success => {return true; });
    }

    postVenue(venue: VenueModel): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.post('/Venues', JSON.stringify(venue))
        ).then(data => {
                data.subscribe(response => {
                    this.getVenueList();
                });
            }).then(data => { return true; });
    }

    putVenue(venue: VenueModel): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.put('/Venues', JSON.stringify(venue))
        ).then(data => {
                data.subscribe(response => {
                    this.getVenueList();
                });
            }).then(success => {return true; });
    }

    deleteVenue(venueId: Number): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.delete('/Venues/' + venueId)
        ).then(data => {
                data.subscribe(response => {
                    this.getVenueList();
                });
            }).then(success => {return true; });
    }

    getTechnicalDifficultyList(): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.get('/TechnicalDifficulties')
        ).then(data => data.subscribe(
            technicalDifficultyData => {
                this.technicalDifficultyList.next(technicalDifficultyData.json());
            }
        )).then(success => {return true; });
    }

    getGenderList(): Promise<Boolean> {
        return Promise.resolve(
            this.apiService.get('/Genders')
        ).then(data => data.subscribe(
            genderData => {
                this.genderList.next(genderData.json());
            }
        )).then(success => {return true; });
    }
}
