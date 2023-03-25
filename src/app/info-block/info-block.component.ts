import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit {

  @Input()
  svgType = 'sunshine'

  constructor() { }

  ngOnInit(): void {
  }

}
