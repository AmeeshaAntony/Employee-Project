import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Client } from '../components/model/class/client';
import { environment } from '../../environments/environment.development';
import { APIResponse } from '../components/model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  getAllClients():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL+"GetAllClients")
  }
  
  addUpdate(obj: Client): Observable<APIResponse> {
    return this.http
      .post<APIResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient", obj)
      .pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          return throwError(error);
        })
      );
  }
  
  DeleteClientByClientId(id: number): Observable<APIResponse> {
    console.log('Client ID to delete:', id);
    return this.http.delete<APIResponse>(
      "https://freeapi.miniprojectideas.com/api/ClientStrive/DeleteClientByClientId?clientId=" + id
    );
  }
}
