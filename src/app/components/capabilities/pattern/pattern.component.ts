import { Component, OnInit } from '@angular/core';
 import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {

  public albums: Array<IAlbum>;
  constructor(
    private _lightbox: Lightbox,
  ) { 
    this.albums = [];
    for (let i = 1; i <= 2; i++) {
      const src = '../../../../assets/Pattern/image' + i + '.jpg';
      const thumb = '../../../../assets/Pattern/image' + i + '.jpg';
      const album = {
         src: src,
         thumb: thumb,
         
      };
    
      this.albums.push(album);
    }
   // set default config


  }
//   public _albums = [
//     { 
//          src: "../../../../assets/IMAGES/injection molding/IMG_20171003_230619.jpg",
//          caption: "test",
//          thumb: "../../../../assets/IMAGES/injection molding/IMG_20171003_230619.jpg"
    
//     },
//     { 
//       src: "../../../../assets/IMAGES/injection molding/IMG_20180113_104610.jpg",
//       caption: "test",
//       thumb: "../../../../assets/IMAGES/injection molding/IMG_20180113_104610.jpg"
 
//  },
//     ];

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
