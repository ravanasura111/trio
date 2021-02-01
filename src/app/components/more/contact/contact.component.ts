import { Component, OnInit } from '@angular/core';
import { google } from "google-maps";
import { Router } from '@angular/router';
import { TriovisionService } from '../../../triovision.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public subjects:any;
  constructor(private router:Router, private triovision: TriovisionService) {
    this.subjects = []

   }
  lat:any = 147.51067;
  lng:any = 78.73645;

  // submited(f:NgForm): void{
  //   // alert('Your Details Submited Successfully');
  //   this.router.navigate(['/contact']);
  //   f.resetForm();

  // }
  ngOnInit(){
     this.subjects = [
          {name: 'For Jobs'},
          {name: 'Sales Enquiry'},
          {name: 'Others'}
        ];
  }
  onSub(){
  }
  // sending(gmail:any){
  //  const data = JSON.stringify(gmail.values);
  //        this.triovision.postEmail(data).subscribe(res => console.log(res));
  // }
  // some stuff

}

