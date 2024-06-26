import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { MessageService } from './message.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsComponent } from './forms/forms.component';
import { ValidationformComponent } from './validationform/validationform.component';
import { PipesComponent } from './pipes/pipes.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , EventBindingComponent , TwoWayDatabindingComponent ,Comp1Component ,Comp2Component,RouterLink,RouterLinkActive,FormsComponent,ValidationformComponent,PipesComponent , RegistrationpageComponent, LoginpageComponent,HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-angular-17';
  _msg:string="";


  constructor(private _messageService:MessageService){
    this._msg=_messageService.getmessage();

  }
}
