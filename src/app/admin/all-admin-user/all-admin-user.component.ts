import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-all-admin-user',
  templateUrl: './all-admin-user.component.html',
  styleUrls: ['./all-admin-user.component.css']
})
export class AllAdminUserComponent implements OnInit {

  myData:any;

  constructor(private apiUser:UserservicesService ) { }

  ngOnInit(): void {

    this.getMyAllUserFromUserService();
  }
  getMyAllUserFromUserService(){
    this.apiUser.getUser().subscribe((data:any)=>{
      console.log(data);
      this.myData=data;
    });
  }

  deleteUser(id:number){
    console.log(id);
    this.myData.splice(id-1,1)
    this.apiUser.deleteUser(id).subscribe((id)=>{
      console.log(id,'deleted ');
    })
    // const index = this.myData.indexOf(id);
    // this.myData.splice(index, 1);
  }
}
