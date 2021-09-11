import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserservicesService } from 'src/app/services/userservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private apiService : UserservicesService) {
    
   }

  ngOnInit(): void {
  }
  addMyUser= new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName: new FormControl(''),
    gender:new FormControl(''),
    address:new FormControl(''),
    email : new FormControl('', [Validators.required, Validators.email]),
    number : new FormControl(''),
    city:new FormControl(''),
    birthDate:new FormControl('')
  })

  // email = new FormControl('', [Validators.required, Validators.email]);
  // number= new FormControl('');
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  // model:any = { };

  addUserFunction(){
    this.apiService.postData(this.addMyUser.value).subscribe((data:any)=>{
      console.log(data);
      this.addMyUser.reset();
      
    })
  }
}
