import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Student } from '../../entities/student';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentProvider {


    ipAddress = 'localhost';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/login_logout';
	
	baseUrl = "/api/login_logout";
	
	username = "";
	password = "";
	loginCredential = "";
	
	
	
	constructor(public platform: Platform,
				private httpClient: HttpClient)
	{
	}

	setLoginCredential(username: string, password: string)
	{
		this.username = username;
		this.password = password;
		this.loginCredential = "?username=" + username + "&password=" + password;
	}

	getStudent(username: string, password: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/studentLogin" + "/" + username + "/"
		+ password
		+ this.loginCredential).pipe
		(
			catchError(this.handleError)
		);
	}

	getLecturer(username: string, password: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/lecturerLogin" + "/" + username + "/"
		+ password
		+ this.loginCredential).pipe
		(
			catchError(this.handleError)
		);
	}

	getAdmin(username: string, password: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/adminLogin" + "/" + username + "/"
		+ password
		+ this.loginCredential).pipe
		(
			catchError(this.handleError)
		);
	}

	getTa(username: string, password: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/taLogin" + "/" + username + "/"
		+ password
		+ this.loginCredential).pipe
		(
			catchError(this.handleError)
		);
	}

	createStudent(student: Student): Observable<any>
	 {
	  let createStudentReq = {"student": student};
	  let path: string = '';
	  
	  if(this.platform.is('core') || this.platform.is('mobileweb')) 
	  {
	   path = this.baseUrl;
	  }
	  else
	  {
	   path = this.fullBaseUrl;
	  }    
	  
	  return this.httpClient.put<any>(path, createStudentReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	 }

	updateStudent(student: Student): Observable<any>
	{
		let updateStudentReq = {"student": student};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.post<any>(path, updateStudentReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}


	deleteStudent(studentId: number): Observable<any>
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
		
		return this.httpClient.delete<any>(path + "/" + studentId).pipe
		(
			catchError(this.handleError)
		);


	}

	getAllStudents(): Observable<any>{
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		

		return this.httpClient.get<any>(path + "/retrieveAllStudents/").pipe
		(
			catchError(this.handleError)
		);
	}

	getCurrentStudent(username: string): Observable<any>

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

		return this.httpClient.get<any>(path + "/getStudent" + "/" + username).pipe

		(
			catchError(this.handleError)
		);
	}

	 assignModule(moduleId:number, studentId: number): Observable<any>
	 {
	  let assignModuleStudentReq = {"studentId": studentId, "moduleId": moduleId};
	  let path: string = '';
	  
	  if(this.platform.is('core') || this.platform.is('mobileweb')) 
	  {
	   path = this.baseUrl;
	  }
	  else
	  {
	   path = this.fullBaseUrl;
	  }    
	  
	  return this.httpClient.put<any>(path + "/assignModule", assignModuleStudentReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	 }

	dropModule(moduleId:number, studentId: number): Observable<any>
	 {
	  let dropModuleStudentReq = {"studentId": studentId, "moduleId": moduleId};
	  let path: string = '';
	  
	  if(this.platform.is('core') || this.platform.is('mobileweb')) 
	  {
	   path = this.baseUrl;
	  }
	  else
	  {
	   path = this.fullBaseUrl;
	  }    
	  
	  return this.httpClient.put<any>(path + "/dropModule", dropModuleStudentReq, httpOptions).pipe
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
