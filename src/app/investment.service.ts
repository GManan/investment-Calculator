import { Inject, Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";
@Injectable({providedIn:'root'})
export class InvestmentService{
    resultData =signal<{      
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number
      }[]|undefined>(undefined);

      calculateInvestmentResults(data: InvestmentInput) {
        console.table(data);
        console.log(data);
        console.log(JSON.stringify(data, null, 2));
    
        const { expectedReturn, initialInvestment, duration, annualInvestment } =
          data;
        const annualData = [];
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
    
        this.resultData.set(annualData);
      }
}