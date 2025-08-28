import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-itchio',
  imports: [CommonModule],
  templateUrl: './itchio.component.html',
  styleUrl: './itchio.component.css'
})
export class ItchioComponent implements OnInit, OnDestroy {
  slides = [
    { src: './screenshots/itchio1.webp', title: 'Slide 1' },
    { src: './screenshots/itchio2.webp', title: 'Slide 2' },
    { src: './screenshots/itchio3.webp', title: 'Slide 3' },
    { src: './screenshots/itchio4.webp', title: 'Slide 4' },
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
