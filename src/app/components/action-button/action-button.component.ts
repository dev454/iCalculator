import { Component, OnInit, Input } from '@angular/core';
import { CalculatorServiceService } from '../../calculator-service.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() action!:string;
  @Input() color!:string;

  constructor(private calculatorService:CalculatorServiceService) { }

  ngOnInit(): void {
    this.calculatorService.sharedAction.subscribe(action => this.action = this.action)
  }
}
