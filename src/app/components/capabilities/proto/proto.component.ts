import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'app-proto',
  templateUrl: './proto.component.html',
  styleUrls: ['./proto.component.css']
})
export class ProtoComponent implements OnInit {

  public albums: Array<IAlbum>;

  constructor(private _lightbox: Lightbox) {

    this.albums = [];
    for (let i = 2; i <= 5; i++) {
      const src = '../../../../assets/IMAGES/Proto Making/image' + i + '.jpg';
      const thumb = '../../../../assets/IMAGES/Proto Making/image' + i + '.jpg';
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
