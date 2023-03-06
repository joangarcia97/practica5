import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-vistausuario',
  templateUrl: './vistausuario.component.html',
  styleUrls: ['./vistausuario.component.css']
})
export class VistausuarioComponent {

  usuario!: Usuario | any;

    constructor(private usuariosServicio: UsuariosService,
                private activatedRoute: ActivatedRoute){}

    ngOnInit() : void{
      this.activatedRoute.params.subscribe(async (params: any) => {
        let _id: string = (params.id);
        console.log(_id);
        let response: any = await this.usuariosServicio.getById(_id);
        console.log(response);
        this.usuario = response;
        
      })
    }
}
