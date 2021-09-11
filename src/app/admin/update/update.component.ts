import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }

  // updateMyUser=new FormGroup({});
  
  updateMyUser= new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName: new FormControl(''),
    gender:new FormControl(''),
    address:new FormControl(''),
    email : new FormControl('', [Validators.required, Validators.email]),
    number : new FormControl(''),
    city:new FormControl(''),
    birthDate:new FormControl('')
  })
  ngOnInit(): void {
  }
  updateUserFunction(){

  }
}
