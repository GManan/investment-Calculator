import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../investment-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onCalculate() {
    console.log("CALCULATE");
    console.log(this.enteredAnualInvestment);
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
    this.calculate.emit({
      annualInvestment:+this.enteredAnualInvestment,
      duration: +this.enteredDuration,
      expectedReturn:+this.enteredExpectedReturn,
      initialInvestment:+this.enteredInitialInvestment,
    });
  }
}
