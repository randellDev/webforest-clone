import { Component } from '@angular/core';
import { CreativepartnerComponent } from './creativepartner/creativepartner';
import { Video } from './video/video';
import { CreativeVision } from './creative-vision/creative-vision';
import { ToolsExpertiseComponent } from './tools-expertise/tools-expertise';
import { Department } from './department/department';
import { VideoGrid } from './video-grid/video-grid';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [
    CreativepartnerComponent,
    Video,
    CreativeVision,
    ToolsExpertiseComponent,
    Department,
    VideoGrid,
  ],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class MainComponent {}
