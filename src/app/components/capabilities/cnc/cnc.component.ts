import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'app-cnc',
  templateUrl: './cnc.component.html',
  styleUrls: ['./cnc.component.css']
})
export class CncComponent implements OnInit {

  public albums: Array<IAlbum>;
  constructor(private _lightbox: Lightbox) {

    this.albums = [];
    for (let i = 1; i <=3; i++) {
      const src = '../../../../assets/cnc/image' + i + '.jpg';
      const thumb = '../../../../assets/cnc/image' + i + '.jpg';
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
