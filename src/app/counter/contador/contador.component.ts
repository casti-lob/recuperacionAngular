import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent implements OnInit {
  @Input() initialValue:any;
  @Input() increment:any
  @Output() total = new EventEmitter<number>();
  value:number=0;
  constructor() {
    
   }
   
  ngOnInit(): void {
  }

  
   minor() {
   this.total.emit(this.initialValue -= this.increment);
  }

  mayor(){
   
    this.total.emit(this.initialValue += this.increment);
  }
}
