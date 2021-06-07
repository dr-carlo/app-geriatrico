
import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'})

export class MongoService {
  uri: string = 'http://localhost:3001';

  constructor(private http: HttpClient) { 
    console.log('SERVICIO MONGOO DB..');
  }

  // TRAER TODOS LOS REGISTROS
  getPosts() {
    return this.http.get(`${this.uri}/traer/tut`);
  }

  // AGREGAR REGISTRO
  addPost(k) {
    return this.http.post(`${this.uri}/reg/add/tut`, k);
  }

  // ELIMINAR REGISTRO
  deletePost(id) {
    return this.http.delete(`${this.uri}/borrar/tut/${id}`);
  }
}
