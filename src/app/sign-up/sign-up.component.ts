import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDTO } from '../dto/UserDTO';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public userDTO: UserDTO, private userService: UserService) { }

  ngOnInit() {
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
