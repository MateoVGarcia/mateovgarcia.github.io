import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agua-potable',
  imports: [CommonModule],
  templateUrl: './agua-potable.component.html',
  styleUrls: ['./agua-potable.component.css']
})
export class AguaPotableComponent implements OnInit, OnDestroy {
  slides = [
    { src: './screenshots/aguapotable1.webp', title: 'Slide 1' },
    { src: './screenshots/aguapotable2.webp', title: 'Slide 2' },
    { src: './screenshots/aguapotable3.webp', title: 'Slide 3' },
    { src: './screenshots/aguapotable4.webp', title: 'Slide 4' },
  ];

  currentIndex = 0;
  intervalId?: any;
  autoplayDelay = 4000; // 4 segundos

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.clearAutoplay();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.startAutoplay(); // reinicia autoplay si el usuario interactúa
  }

  startAutoplay() {
    this.clearAutoplay();
    this.intervalId = setInterval(() => {
      this.next(false); // false = no reiniciar nuevamente
    }, this.autoplayDelay);
  }

  clearAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  prev(userInteraction: boolean = true) {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    if (userInteraction) this.startAutoplay();
  }

  next(userInteraction: boolean = true) {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    if (userInteraction) this.startAutoplay();
  }
}
