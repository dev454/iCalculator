import { Component, OnInit } from '@angular/core';
import { CalculatorServiceService } from '../../calculator-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  currentDisplay!:number;

  constructor(private calculatorService: CalculatorServiceService) { }

  ngOnInit(): void {
    this.calculatorService.sharedDisplay.subscribe(currentDisplay => this.currentDisplay = currentDisplay)
  }
}
