import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environments/environment';
import { Response } from '../models/response.model';
import { DocumentType } from 'src/app/models/documentType.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  private server = `${Environment.server}/documentType`;
  constructor(
    private http:HttpClient,
  ) { }

  getAllDocumentsTypes():Observable<Response<DocumentType[]>>{
    return this.http.get<Response<DocumentType[]>>(`${this.server}/getAllDocumentTypes`);
  }

}
