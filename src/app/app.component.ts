import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = ['university.jpg', 'learning.jpg', 'coding.jpg'];
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
