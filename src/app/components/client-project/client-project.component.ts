import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
imports: [ReactiveFormsModule];
@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent {
  clientList: any[] = []; // Replace with appropriate type
  clientObj: any = { clientId: 0 };
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),//primary key
    projectName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  })

  onEdit(item: any): void {
    console.log('Edit clicked', item);
  }

  onDelete(clientId: number): void {
    console.log('Delete clicked for clientId:', clientId);
  }

  onSaveClient(): void {
    if (this.projectForm.valid) {
      console.log('Form Data:', this.projectForm.value);
      // Handle form submission logic here
    }
  }
}
