import { Component, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UserCardComponent } from '../user-card/user-card.component';

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

    deleteUser(pId: number | undefined): void{
      const miObservable = {
        next: (response: any) => {
          if (!response){
            alert('Usuario borrado correctamente')

          }
        },
        error: (error: any) => {
          console.log(error)
      }

      }
      
    if (pId){
      this.usuariosServicio.deleteObs(pId).subscribe(miObservable)
    }

  }
}
