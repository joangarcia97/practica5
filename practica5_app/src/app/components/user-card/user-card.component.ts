import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() miUser!: Usuario;

  constructor(private usuariosServicio: UsuariosService){}

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
