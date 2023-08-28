import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolModel } from '../models/rol.model';
import { Response } from '../models/response.model';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private server = `${Environment.server}/rol`;
  constructor(
    private http:HttpClient,
  ) { }
  getAllRols():Observable<Response<RolModel[]>>{
    return this.http.get<Response<RolModel[]>>(`${this.server}/getAllRoles`);
  }
}
