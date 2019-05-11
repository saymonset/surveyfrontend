import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserName } from './userName.dto';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: UserName = new UserName();

  editing: boolean = false;

  constructor(activeRoute: ActivatedRoute,
              private router: Router) {
    activeRoute.params.subscribe(params => {
     /* this.editing = params["mode"] == "edit";
      let id = params["id"];
      if (id != null) {
        Object.assign(this.product, model.getProduct(id) || new Product());
      }*/
    });


    /*this.editing = activeRoute.snapshot.params["mode"] == "edit";
     let id = activeRoute.snapshot.params["id"];

     if (id != null) {
     Object.assign(this.product, model.getProduct(id) || new Product());
     }*/
  }

  ngOnInit() {
  }



	submitForm (form: NgForm) {
		if ( form.valid ) {
			//this.model.saveProduct(this.product);
			//this.product = new Product();
			console.log("--------------------");
			console.log(this.username.login);
			form.reset();
      this.router.navigateByUrl("/head");
		}
	}
	resetForm() {
		this.username = new UserName();
	}

}
