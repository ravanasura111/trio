import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'app-lrtm',
  templateUrl: './lrtm.component.html',
  styleUrls: ['./lrtm.component.css']
})
export class LrtmComponent implements OnInit {

  public albums: Array<IAlbum>;
  constructor(private _lightbox: Lightbox) {
    this.albums = [];
    for (let i = 1; i <= 4; i++) {
      const src = '../../../../assets/IMAGES/LRTM/image' + i + '.jpg';
      const thumb = '../../../../assets/IMAGES/LRTM/image' + i + '.jpg';
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
