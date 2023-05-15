import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html'
})
export class TareaComponent implements OnInit {
  @Input() minioms:any;
  constructor() {}

  


  ngOnInit(): void {
  }

}
