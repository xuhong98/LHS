import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Lecturer} from '../../entities/lecturer';
import { Announcement } from '../../entities/announcement';
import { Module } from '../../entities/module';
import { Lecturer } from '../../entities/lecturer';
const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LecturerProvider {

	ipAddress = 'localhost';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/lecturer';
	
	baseUrl = "/api/lecturer";


  	constructor(public platform: Platform, private httpClient: HttpClient) {
    	console.log('Hello LecturerProvider Provider');
  	}

	getSpecificLecturer(lecturerId: number): Observable<any>
	{
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.get<any>(path + "/retrieveSpecificLecturer/" + lecturerId).pipe
		(
			catchError(this.handleError)
		);
	}

	getEnrolledModules(lecturerId: number): Observable<any>
	{
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.get<any>(path + "/retrieveEnrolledModules/" + lecturerId).pipe
		(
			catchError(this.handleError)
		);
	}

	createAnnouncement(announcement: Announcement, moduleId:number, username: string): Observable<any>
	 {
	  let createAnnouncementReq = {"announcement": announcement, "moduleId": moduleId, "username": username};
	  let path: string = '';
	  
	  if(this.platform.is('core') || this.platform.is('mobileweb')) 
	  {
	   path = this.baseUrl;
	  }
	  else
	  {
	   path = this.fullBaseUrl;
	  }    
	  
	  return this.httpClient.put<any>(path, createAnnouncementReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	 }

	 createLecturerTimeEntry(timeEntry: TimeEntry, username: string): Observable<any>
	{
		let createLecturerTimeEntryReq = {"timeEntry": timeEntry, "username": username};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}				
		
		return this.httpClient.put<any>(path, createLecturerTimeEntryReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}


	private handleError(error: HttpErrorResponse)
	{
		if (error.error instanceof ErrorEvent) 
		{		
			console.error('An unknown error has occurred:', error.error.message);
		} 
		else 
		{		
			console.error(" A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`);
		}
		
		return new ErrorObservable(error);
	}
}
