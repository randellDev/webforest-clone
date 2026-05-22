import { Routes } from '@angular/router';
import { CreativepartnerComponent } from './component/creativepartner/creativepartner';
import { Video } from './component/video/video';
import { MainComponent } from './component/component';
import { CreativeVision } from './component/creative-vision/creative-vision';
import { ToolsExpertiseComponent } from './component/tools-expertise/tools-expertise';

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

  {
    path: 'vision',
    component: CreativeVision,
  },

  {
    path: 'tools-expertise',
    component: ToolsExpertiseComponent,
  },
];
