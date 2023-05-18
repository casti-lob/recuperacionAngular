import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements OnInit {
  @Input() empleados:any
  constructor() { }

  ngOnInit(): void {
  }

  
  
}
