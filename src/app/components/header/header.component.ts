import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public handler: boolean;
  constructor() {
    this.handler = false;
   }
 

  ngOnInit(): void {
  }
  handle(){
      if(this.handler === true){
        this.handler = false;
      }
      else{
        this.handler = true;
      }
  }

}



