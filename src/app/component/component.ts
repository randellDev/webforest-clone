import { Component } from '@angular/core';
import { CreativepartnerComponent } from './creativepartner/creativepartner';
import { Video } from './video/video';
import { CreativeVision } from './creative-vision/creative-vision';
import { ToolsExpertiseComponent } from './tools-expertise/tools-expertise';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CreativepartnerComponent, Video, CreativeVision, ToolsExpertiseComponent],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class MainComponent {}
