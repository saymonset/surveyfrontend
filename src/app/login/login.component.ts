import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from '../dto/UserDTO';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDTO: UserDTO = new UserDTO();
  public errorMessage: string;
  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  authenticate(form: NgForm) {
    if (form.valid) {
// perform authentication
      this.auth.authenticate(this.userDTO)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl('/head');
          }
          this.errorMessage = 'Authentication Failed';
        });
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
	resetForm() {
  		this.userDTO.clear();
	 }

}
