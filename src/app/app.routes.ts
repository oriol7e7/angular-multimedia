import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Contact } from './contact/contact.component';
import { Gamemodes } from './gamemodes/gamemodes.component';
import { Information } from './information/information.component';
import { MultimediaComponent } from './multimedia/multimedia.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'modes',
    component: Gamemodes,
  },
  {
    path: 'info',
    component: Information,
  },
  {
    path: 'multimedia',
    component: MultimediaComponent,
  },
];
