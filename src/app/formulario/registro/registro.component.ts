import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
  
  
  constructor() { 

   
  }
  @Output() submitName = new EventEmitter<string>()
  @Output() submitPassword = new EventEmitter<string>()
  @Input() user:any;
  @Input() pass:any;
 
  ngOnInit(): void {
  }
  submitUser (){
   
    this.submitName.emit(this.user);
    this.submitPassword.emit(this.pass);
    
  }
}
