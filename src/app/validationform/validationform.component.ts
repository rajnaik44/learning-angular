import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-validationform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './validationform.component.html',
  styleUrl: './validationform.component.css'
})
export class ValidationformComponent {

  register(regdata:NgForm){
    console.log(regdata.value);
    console.log(regdata.valid)
  }


}
