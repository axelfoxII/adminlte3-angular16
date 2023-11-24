import { Component, OnInit } from '@angular/core';
declare var $:any;

interface Image {
  src: string;
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  imageArray: Image[] = [
    { src: '../../assets/dist/img/prod-1.jpg' },
    { src: '../../assets/dist/img/prod-2.jpg' },
    { src: '../../assets/dist/img/prod-3.jpg' },
    { src: '../../assets/dist/img/prod-4.jpg' },
    { src: '../../assets/dist/img/prod-5.jpg' }
  ];

  activeImageSrc: string = this.imageArray[0].src;

  handleImageClick(imageSrc: string): void {
    console.log(imageSrc)
    this.activeImageSrc = imageSrc;
  }
  constructor(){
    

  }

  ngOnInit() {
   /*  $(document).ready(() => {
      $('.product-image-thumb').on('click', function(this: HTMLElement) {
        const $imageElement = $(this).find('img');
        $('.product-image').prop('src', $imageElement.attr('src'));
        $('.product-image-thumb.active').removeClass('active');
        $(this).addClass('active');
      });
    }); */
  }

}
