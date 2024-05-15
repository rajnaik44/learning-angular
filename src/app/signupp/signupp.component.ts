import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signupp',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './signupp.component.html',
  styleUrl: './signupp.component.css'
})
export class SignuppComponent {

  constructor(private seller:SellerService){

  }

  signUp(data:object):void{
      console.log(data)
      this.seller.userSignUp(data).subscribe((result)=>{
        console.warn(result)
      })

      

  }

}
