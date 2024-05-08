import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployRegistrationComponent } from "../../Pages/employ-registration/employ-registration.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, EmployRegistrationComponent]
})
export class AppComponent {
  title = 'EmployRegistrtration';
}
