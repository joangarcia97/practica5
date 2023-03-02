import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  arrUsuario: Usuario[] = [];

  constructor(private usuariosServicio: UsuariosService){}

  async ngOnInit(): Promise<void> {
    
    try{
    let response = await this.usuariosServicio.getAll()
    
    this.arrUsuario = response.results
    console.log(this.arrUsuario);
    }
    
    catch(error){
      console.log(error);
    }
}
}
