import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'app-waterslide',
  templateUrl: './waterslide.component.html',
  styleUrls: ['./waterslide.component.css']
})
export class WaterslideComponent implements OnInit {

  public albums: Array<IAlbum>;
  constructor(private _lightbox: Lightbox) { 
    this.albums = [];
      for (let i = 1; i <= 18; i++) {
        const src = '../../../../assets/waterslide/image' + i + '.jpg';
        const thumb = '../../../../assets/waterslide/image' + i + '.jpg';
        const album = {
           src: src,
           thumb: thumb,
           
        };
      
        this.albums.push(album);
      }
  }

  ngOnInit(): void {
  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albums, index);
    
  }
  
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
