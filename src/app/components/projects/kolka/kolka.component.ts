import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';


@Component({
  selector: 'app-kolka',
  templateUrl: './kolka.component.html',
  styleUrls: ['./kolka.component.css']
})
export class KolkaComponent implements OnInit {

  public albums: Array<IAlbum>;

  constructor(private _lightbox: Lightbox) {
    this.albums = [];
    for (let i = 2; i <= 6; i++) {
      const src = '../../../../assets/Kolkata Metro/image' + i + '.jpg';
      const thumb = '../../../../assets/Kolkata Metro/image' + i + '.jpg';
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
