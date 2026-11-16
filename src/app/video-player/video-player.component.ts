import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-video-player',
  styleUrl: './video-player.component.css',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  videoVisible = false;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.activateVideo(); // Alternativa per a navegadors antics
      return;
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.activateVideo();
          this.observer?.disconnect();
        }
      },
      { rootMargin: '100px' },
    );
    this.observer.observe(this.videoRef.nativeElement);
  }

  private activateVideo(): void {
    this.videoVisible = true;
    const video = this.videoRef.nativeElement;
    // Assignació imperativa de fonts perquè el navegador les detecti immediatament.
    const mp4 = video.querySelector<HTMLSourceElement>('[data-format="mp4"]');
    const webm = video.querySelector<HTMLSourceElement>('[data-format="webm"]');
    if (mp4) mp4.src = '/video/gameplay.mp4';
    if (webm) webm.src = '/video/gameplay.webm';
    video.load();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
