import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';


@Component({
  selector: 'app-c',
  templateUrl: '../../capabilities/cmm/c.component.html',
  styleUrls: ['../../capabilities/cmm/c.component.css']
})
export class CComponent implements OnInit {

  public albums: Array<IAlbum>;
  constructor(private _lightbox: Lightbox) {

    this.albums = [];
    for (let i = 1; i <= 3; i++) {
      const src = '../../../../assets/CMM/image' + i + '.jpg';
      const thumb = '../../../../assets/CMM/image' + i + '.jpg';
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
