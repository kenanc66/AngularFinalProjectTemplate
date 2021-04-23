import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {

  }

  logOut(){
    
    if (localStorage.length<1) {
      this.toastr.success("logged out already")
    }else{

      this.toastr.success("Logged Out")
      return localStorage.clear()
    }
   
  }
}
