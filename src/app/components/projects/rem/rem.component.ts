import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';


@Component({
  selector: 'app-rem',
  templateUrl: './rem.component.html',
  styleUrls: ['./rem.component.css']
})
export class RemComponent implements OnInit {

  public albums: Array<IAlbum>;

  constructor(private _lightbox: Lightbox,) {
    this.albums = [];
      for (let i = 1; i <= 24; i++) {
        const src = '../../../../assets/REM/image' + i + '.jpg';
        const thumb = '../../../../assets/REM/image' + i + '.jpg';
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
