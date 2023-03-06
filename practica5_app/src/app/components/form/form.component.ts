import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title: string = 'Registro';
  userForm: FormGroup;
  msg: string = "";
  type: string = "";

    constructor(
      private usuariosServicio: UsuariosService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ){
      this.userForm = new FormGroup({
        first_name: new FormControl("", []),
        last_name: new FormControl("", []),
        email: new FormControl("", []),
        avatar: new FormControl("", []),
      }, []);
    }

    ngOnInit(): void{

      this.activatedRoute.params.subscribe(async (params: any) => {
      //console.log(params);
      let id = params.id;
      //console.log(id);
      if (id){
        this.title = 'Actualizar'
        const response = await this.usuariosServicio.getById(id);
      //console.log(response);
        const usuario: Usuario = response;
      //console.log(usuario);
        
        this.userForm = new FormGroup({
          id: new FormControl(id, []),
          first_name: new FormControl(usuario.first_name, []),
          last_name: new FormControl(usuario.last_name, []),
          email: new FormControl(usuario.email, []),
          image: new FormControl(usuario.image, []),
        }, []);
    }
      })
    }

    getDataForm() {
      let user: Usuario = this.userForm.value;
      this.usuariosServicio.create(user)
        .then((response) => {
          if (response.id) {
            alert(`usuario ${response.first_name} con id ${response.id} se creado correctamente`);
            this.router.navigate(['/home']);
          }
        })
        .catch((err) => {
          console.log(err)
        })


    /* async getDataForm(){
      let usuario = this.userForm.value
      if (usuario.id){
        this.usuariosServicio.update(usuario).subscribe((data: Usuario) => {
          if (data.updateAt){
            this.msg = `usuario ${data.first_name} con id ${data.id} se ha actualizado correctamente`;
            this.type = 'success'
          }
        });
      } else {
        try{
          let response = await this.usuariosServicio.create(usuario)
          if (response.id){
            this.msg = `usuario ${response.first_name} con id ${response.id} se creado correctamente`;
          this.type = 'success';
          }
        }
      }*/
    }
}

