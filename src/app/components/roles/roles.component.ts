import { HttpClient } from '@angular/common/http';
import { Component , inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponse, IRole } from '../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit {
  /*firstName : string = "Angular Tutorial";
  angularVersion = "Version 18";
  version : number = 18;
  isActive : boolean = false;
  cD : Date = new Date();
  showalert(alert1 : string){
    alert(alert1)
  }*/
  roleList: IRole [] = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getRoles()
  }
  getRoles(){
    this.http.get<APIResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponse)=>{
      this.roleList = res.data
    })
  }

  
}
