import { Component, output, signal } from '@angular/core';
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
  calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal('0');
  enteredAnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onCalculate() {
    console.log("CALCULATE");
    console.log(this.enteredAnualInvestment);
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
    this.calculate.emit({
      annualInvestment:+this.enteredAnualInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn:+this.enteredExpectedReturn(),
      initialInvestment:+this.enteredInitialInvestment(),
    });
  }
}
