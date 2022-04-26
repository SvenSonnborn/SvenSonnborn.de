import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['coding.jpg', 'learning.jpg', 'university.jpg'];
  headlines = [
    'Find out what you like doing best and make it your job',
    'If you are willing to be a self-learner, you will develop yourself',
    'Allways learning',
  ];

  currentImg = 0;
  showImg = true;

  ngOnInit() {
    this.updateImg();
  }

  //Updates images every 8sec and reloads image everytime -> Animation is played everytime
  updateImg() {
    setInterval(() => {
      this.currentImg++;
      this.currentImg = this.currentImg % this.images.length;
      this.showImg = false;

      setTimeout(() => {
        this.showImg = true;
      }, 10);
    }, 8000);
  }

}
