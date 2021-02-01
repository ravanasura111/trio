import { Component, OnInit, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public albums: Array<IAlbum>;
  public albums2: Array<IAlbum>;
  public albums3: Array<IAlbum>;
  public visiting:boolean;
  public iits:boolean;
  public ambs:boolean;
  public isClicked:boolean;
  public isClicked1:boolean;
  public isClicked2:boolean;
  constructor(private _lightbox: Lightbox) {
    this.albums = [];
    this.albums2 = [];
    this.albums3 = []
    this.visiting = true;
    this.iits = false;
    this.ambs = false;
    this.isClicked = true;
    this.isClicked1 = false;
    this.isClicked2 = false;
    for (let i = 1; i <= 10; i++) {
      const src = '../../../assets/Visitors/image' + i + '.jpg';
      const thumb = '../../../assets/Visitors/image' + i + '.jpg';
      const album = {
         src: src,
         thumb: thumb,
         
      };
    
      this.albums.push(album);
    }
    for (let j = 1; j <= 2; j++) {
      const src1 = '../../../assets/IIT Tirupati Visit/IIT Tirupati Visit/image' + j + '.jpg';
      const thumb1= '../../../assets/IIT Tirupati Visit/IIT Tirupati Visit/image' + j + '.jpg';
      const album2 = {
         src: src1,
         thumb: thumb1,
         
      };
    
      this.albums2.push(album2);
    }

    for (let k = 1; k <= 5; k++) {
      const src2 = '../../../assets/Taiwan Ambasidar Visitor/image' + k + '.jpg';
      const thumb2= '../../../assets/Taiwan Ambasidar Visitor/image' + k + '.jpg';
      const album3 = {
         src: src2,
         thumb: thumb2,
         
      };
    
      this.albums3.push(album3);
    }
   }
  
  ngOnInit(): void {
  }
open(index: number): void {
  // open lightbox
  if(this.visiting === true){
    this._lightbox.open(this.albums, index);
  }

  if(this.iits === true){
    this._lightbox.open(this.albums2, index);
  }
  if(this.ambs === true){
    this._lightbox.open(this.albums3, index);
  }
}


close(): void {
  // close lightbox programmatically
  this._lightbox.close();
}
visit(){
  this.visiting = true;
  this.iits = false;
  this.ambs = false;
  if(this.visiting === true){
    this.isClicked = true;
    this.isClicked1 = false;
    this.isClicked2 = false;
  }
   else{
    this.isClicked = false;
  }

}
visit2(){
  this.iits = true;
  this.visiting = false;
  this.ambs = false;
  if(this.iits === true){
    this.isClicked1 = true;
    this.isClicked = false;
    this.isClicked2 = false;

  }
   else{
    this.isClicked1 = false;
  }

}
visit3(){
  this.ambs = true;
  this.visiting = false;
  this.iits = false;
  if(this.ambs === true){
    this.isClicked2 = true;
    this.isClicked = false;
    this.isClicked1 = false;
  }
  else{
    this.isClicked2 = false;
  }
}

// visit3(){
//   this.visiting = true;
//   this.isClicked1 = true;
//   if(this.ambs === true){
//     this.visiting = false;
//     this.iits = false;
//     this.isClicked = false;
//     this.isClicked1 = false;
//   }
//    else if(this.iits === true){
//      this.isClicked1 = true;
//     this.visiting = false;
//     this.isClicked = false;
//     this.ambs = false;
//     this.isClicked2 = false;
//   }
//   else if(this.visiting === true){
//      this.isClicked = true;
//      this.iits = false;
//      this.isClicked1 = true;
//      this.ambs = false;
//      this.isClicked2 = false;
//   }

// }

}