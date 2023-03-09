import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = this.formBuild.group({
    username: ['mor_2314', [Validators.required ]],
    password: ['83r5^_', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private formBuild: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  login() {
    const { username, password } = this.formLogin.value;
    this.authService.login( username, password )
      .subscribe( resp => {
        if( resp.token ) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Login successfully'
          })
          this.router.navigateByUrl('/');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp,
          })
        }
      });
  }
}
