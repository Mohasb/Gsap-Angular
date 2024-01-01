import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Moha Surf';
  @ViewChild('secondSection', { static: true })
  secondSection!: ElementRef<HTMLDivElement>;
  @ViewChild('menu', { static: true }) menu!: ElementRef<HTMLDivElement>;
  @ViewChild('menuSecond', { static: true })
  menuSecond!: ElementRef<HTMLDivElement>;
  @ViewChild('imageFirst', { static: true })
  imageFirst!: ElementRef<HTMLDivElement>;
  @ViewChild('imageSecond', { static: true })
  imageSecond!: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimation();
  }

  initScrollAnimation(): void {
    // Animación imagen 1
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFirst.nativeElement,
        scrub: true,
        start: '110% center',
      } as ScrollTrigger.Vars,
      duration: 1.1,
      scale: 1.2,
      height: 250,
    });
    // Animación imagen 2
    gsap.to(this.imageSecond.nativeElement, {
      scrollTrigger: {
        trigger: this.secondSection.nativeElement,
        scrub: true,
        start: '80% center',
      },
      duration: 1.1,
      scale: 1.2,
      height: 380,
    });
    // Animación titulo h1
    gsap.to(this.document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: true,
        start: '150% center',
      },
      color: '#fff',
      duration: 1.5,
    });
    //Animación texto
    gsap.to(this.document.querySelector('.paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.paragraph'),
        scrub: true,
        start: '150% center',
      },
      color: '#fff',
      duration: 1.5,
    });
    //Animacion botón
    gsap.to(this.document.querySelector('.btn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.btn'),
        scrub: true,
        start: '150% center',
      },
      color: '#fff',
      duration: 1.5,
    });
    // texto de central
    gsap.from(this.document.querySelector('#buy'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#buy'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    // about text
    gsap.from(this.document.querySelector('#about'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#about'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.box'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.box'),
        scrub: true,
        toggleClass: 'active',
        start: '-10% center',
      },
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      height: 0,
      scale: 1.3,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.quote'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.quote'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual .heading-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual .heading-3'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual .btn--learn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual .btn--learn'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      },
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
  }

  initialAnimations(): void {
    //Animación del nav
    gsap.from(this.menu.nativeElement, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
    //
    gsap.from(this.menuSecond.nativeElement, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.8,
    });
    //
    gsap.from(this.imageFirst.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.5,
    });
    gsap.from(this.imageSecond.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.heading-1'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.paragraph'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.7,
    });
    gsap.from(this.document.querySelector('.btn'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.8,
    });
  }
}
