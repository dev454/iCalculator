import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {
  private currentDisplay = new BehaviorSubject<number>(0);
  sharedDisplay = this.currentDisplay.asObservable();
  preservedDisplay!:number;

  private action = new BehaviorSubject<string>('')
  sharedAction = this.action.asObservable();

  constructor() {}

  setCurrentDisplay(newDigit:number) {
    this.currentDisplay.next(newDigit);
  }

  setCurrentAction(newAction:string) {
    this.action.next(newAction);
  }

  handleActionClick(newAction:string) {
    this.setCurrentAction(newAction);
    this.setCurrentDisplay(0);
  }

  handleCalculationClick() {
   this.setCurrentDisplay(parseFloat(`${this.sharedDisplay} ${this.action} ${this.preservedDisplay}`));
  }

  handleClearClick() {
   this.setCurrentDisplay(0); 
  }
}
