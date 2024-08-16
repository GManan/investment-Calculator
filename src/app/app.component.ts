import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultsComponent } from "./components/investment-results/investment-results.component";
import {type InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {

}
