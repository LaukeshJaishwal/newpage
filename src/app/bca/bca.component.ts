import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bca',
  templateUrl: './bca.component.html',
  styleUrls: ['./bca.component.css']
})
export class BcaComponent implements OnInit {
  showMenu:any
  constructor() {
    this.showMenu = "cpro"
   }

  ngOnInit(): void {
  }

  show(pageName){
    this.showMenu = pageName;
  }

}
