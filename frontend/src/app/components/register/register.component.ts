import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService, private toastrService:ToastrService) { }
 
    ngOnInit(): void {
   
    this.createRegisterForm()
    
  }
  createRegisterForm(){
    
    this.registerForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required]
    })
  }
  register(){
   
    if(this.registerForm.valid){
      // console.log(this.registerForm.value);
      let registerModel = Object.assign({},this.registerForm.value)

      this.authService.register(registerModel).subscribe(response=>{
       console.log("register attempt success")
        this.toastrService.info("Registered succesfully.");
       
      },responseError=>{
        console.log("register attempt error")
        console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }
}
