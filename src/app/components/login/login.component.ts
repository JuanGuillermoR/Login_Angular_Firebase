import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  formLogin: FormGroup;

  constructor(private GetdataService: GetdataService,private router: Router) 
    {
      this.formLogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
  }

    ngOnInit(): void{
    }
  
    onSubmit() {
      this.GetdataService.login(this.formLogin.value)
        .then(response => {
          console.log(response);
          this.router.navigate(['/home']);
        })
        .catch(error => console.log(error));
    }
  
    onClick() {
      this.GetdataService.loginWithGoogle()
        .then(response => {
          console.log(response);
          this.router.navigate(['/home']);
        })
        .catch(error => console.log(error))
    }
}

