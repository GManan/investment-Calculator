import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../investment-input.model';
import { InvestmentService } from '../../investment.service';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService){};

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
    this.investmentService.calculateInvestmentResults(
      {
        annualInvestment:+this.enteredAnualInvestment(),
        duration: +this.enteredDuration(),
        expectedReturn:+this.enteredExpectedReturn(),
        initialInvestment:+this.enteredInitialInvestment(),
      }
    )
  }
}
