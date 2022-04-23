import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigitButtonComponent } from './components/digit-button/digit-button.component';
import { DisplayComponent } from './components/display/display.component';
import { CalculatorServiceService } from './calculator-service.service';
import { ActionButtonComponent } from './components/action-button/action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitButtonComponent,
    DisplayComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculatorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
