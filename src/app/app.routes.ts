import { Routes } from '@angular/router';
import { CreativepartnerComponent } from './component/creativepartner/creativepartner';
import { Video } from './component/video/video';
import { MainComponent } from './component/component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },

  {
    path: 'creativepartner',
    component: CreativepartnerComponent,
  },

  {
    path: 'video',
    component: Video,
  },
];
