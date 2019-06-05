import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDTO } from '../dto/UserDTO';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { NuevoUsuario } from '../dto/nuevo-usuario';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: any = {};
  private usuario: any = {};
  isRegister = false;
  isRegisterFail = false;
  errorMsg = '';


  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public userDTO: UserDTO, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
  }

  onRegister() {
    this.usuario = new NuevoUsuario(this.form.nombre, this.form.nombreUsuario, this.form.email, this.form.password);
    this.authService.registro(this.usuario).subscribe(data => {
        this.isRegister = true;
        this.isRegisterFail = false;
      },
      (error: any) => {
        console.log(error.error.mensaje);
        this.errorMsg = error.error.mensaje;
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
       console.log(JSON.stringify(this.userDTO));
        this.userService.register(this.userDTO).subscribe(userDTO => {
        this.userDTO.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
