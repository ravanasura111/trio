import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    
   }
 
  ngOnInit(): void {

  }
  event1(){
    this.router.navigate(['/news'], { fragment: 'tris' });
  }
  event2(){
    this.router.navigate(['/news'], { fragment: 'amb' });
  }
event3(){
  this.router.navigate(['/news'], { fragment: 'ind' });
}
event4(){
  this.router.navigate(['/news'], { fragment: 'exp' });
}
}
