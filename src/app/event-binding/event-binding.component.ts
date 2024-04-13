import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  onchange(){
    console.log("clicked")
  }

  onchange1(){
    console.log("clicked1")
  }

  keyup(){
    console.log("keyup fired")

  }

  keydown(){
    console.log("keydown fired")

  }


  name = "";

  onclick(val:any){
    this.name = val;
  }
}
