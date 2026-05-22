import { Component } from '@angular/core';
import { CreativepartnerComponent } from './creativepartner/creativepartner';
import { Video } from './video/video';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CreativepartnerComponent, Video],
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class MainComponent {}
