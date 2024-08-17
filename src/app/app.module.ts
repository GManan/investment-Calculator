import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { AppComponent } from './app.component';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './components/user-input/user-input.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultsComponent,
  ],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
