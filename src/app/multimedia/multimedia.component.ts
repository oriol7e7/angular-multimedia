import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@Component({
  imports: [VideoPlayerComponent, AudioPlayerComponent],
  selector: 'app-multimedia',
  styleUrl: './multimedia.component.css',
  templateUrl: './multimedia.component.html',
})
export class MultimediaComponent {}
