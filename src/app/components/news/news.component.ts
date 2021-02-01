import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    

  }

}
