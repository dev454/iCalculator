import { Component, OnInit, Input } from '@angular/core';
import { CalculatorServiceService } from '../../calculator-service.service';

@Component({
  selector: 'app-digit-button',
  templateUrl: './digit-button.component.html',
  styleUrls: ['./digit-button.component.scss']
})
export class DigitButtonComponent implements OnInit {
  @Input() digit!: number;
  @Input() color!:string;
  currentDisplay!:number;

  constructor(private calculatorService: CalculatorServiceService) { }

  ngOnInit(): void {
    this.calculatorService.sharedDisplay.subscribe(currentDisplay => this.currentDisplay = currentDisplay)
  }

  digitClick(digit: number) {
    console.log(this.currentDisplay * 10 + digit);
    this.calculatorService.setCurrentDisplay(this.currentDisplay * 10 + digit);
  }
}
