import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csit',
  templateUrl: './csit.component.html',
  styleUrls: ['./csit.component.css']
})
export class CsitComponent implements OnInit {
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
