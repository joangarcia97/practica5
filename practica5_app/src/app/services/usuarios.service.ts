import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

private baseUrl: string = 'https://peticiones.online/api/users/'
constructor(private httpClient: HttpClient) { }

getAll(pPage: number = 1): Promise<any>{
  return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}?page=${pPage}`))
}

getById(pId: string) : Promise<Usuario>{
  return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}${pId}`))
}

create(pUsuario: Usuario): Promise<Usuario>{
  return lastValueFrom(this.httpClient.post<Usuario>(this.baseUrl, pUsuario))
}

update(pUsuario: Usuario): Observable<Usuario>{
  return this.httpClient.put<Usuario>(`${this.baseUrl}${pUsuario._id}`, pUsuario)
}

delete(pId: string): Promise<any>{
  return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${pId}`))
}

deleteObs(pId: number): Observable<any>{
  return this.httpClient.delete<any>(`${this.baseUrl}${pId}`);
}

}

