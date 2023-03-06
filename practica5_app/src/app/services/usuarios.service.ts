import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
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

}

