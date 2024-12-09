import { Component,inject,OnInit } from '@angular/core';
import { Client } from '../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponse } from '../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj : Client = new Client();
  clientList:Client[]=[];
  clientService=inject(ClientService);
  ngOnInit(): void {
    this.LoadClient();
  }
  LoadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponse)=>{
      this.clientList=res.data
    })
  }
  onSaveClient(){
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponse)=>{
      console.log('Payload being sent:', this.clientObj);
      if(res.result){
        alert("client created");
        this.LoadClient();
        this.clientObj = new Client();
      }else{
        alert(res.message)
      }
    })
  }
  onEdit(data:Client){
    this.clientObj=data;
  }
  onDelete(id:number){
    this.clientService.DeleteClientByClientId(id).subscribe((res:APIResponse)=>{
      if(res.result){
        alert("client deleted");
        this.LoadClient();
      }else{
        alert(res.message)
      }
    })
  }
}
