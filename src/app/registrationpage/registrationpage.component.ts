import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrationpage',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './registrationpage.component.html',
  styleUrl: './registrationpage.component.css'
})
export class RegistrationpageComponent implements OnInit {

  registrationObj:any ={
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "cpassword": ""
  }

  constructor(private http: HttpClient){

  }

  onRegister(){
    this.http.post("http://localhost:3000/v1/users/add-user", this.registrationObj).subscribe((res:any)=>{
      if(res.result){
        alert("Registration successfull")
      }else{
        alert(res.message)
      }
    })

  }


  list:any[] =[];

  ngOnInit(): void {
    this.getallRegistration();
  }

  getallRegistration(){
    this.http.get("http://localhost:3000/v1/users/get-user").subscribe((res:any)=>{
     this.list = res.data
    })

  }

// //API INTEGRATION GET METHOD
//   public getJsonValue:any;
//   public postJsonValue:any;

//   public method (){
//     this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data)=>{
//       console.log(data);
//       this.getJsonValue = data
//     })
//   }
 

//   //post method
//   public pmethod(){
//     const header = new HttpHeaders({
//       contentType: 'application/json'
//     })

//     let body:any = {
//       title: "foo",
//       body: "raj",
//       userId: 1
//     }

//     this.http.get('https://jsonplaceholder.typicode.com/todos/1', body ).subscribe((data)=>{
//       console.log(data);
//       this.postJsonValue = data
//     })

//   }

}
