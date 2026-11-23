import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  imports: [VideoPlayerComponent, AudioPlayerComponent, GalleryComponent],
  selector: 'app-multimedia',
  styleUrl: './multimedia.component.css',
  templateUrl: './multimedia.component.html',
})
export class MultimediaComponent {}
