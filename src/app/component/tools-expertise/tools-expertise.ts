import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tools-expertise',
  templateUrl: './tools-expertise.html',
  styleUrls: ['./tools-expertise.scss'],
})
export class ToolsExpertiseComponent {
  @ViewChild('floatingImg') floatingImg!: ElementRef;

  targetX = 0;
  targetY = 0;
  currentX = 0;
  currentY = 0;

  onMouseMove(event: MouseEvent) {
    const el = this.floatingImg.nativeElement;
    const rect = el.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    this.targetY = mouseX / 55;
    this.targetX = -mouseY / 55;

    this.animate();
  }

  animate() {
    const el = this.floatingImg.nativeElement;

    const speed = 1;

    this.currentX += (this.targetX - this.currentX) * speed;
    this.currentY += (this.targetY - this.currentY) * speed;

    el.style.transform = `
      perspective(1000px)
      rotateX(${this.currentX}deg)
      rotateY(${this.currentY}deg)
    `;

    requestAnimationFrame(() => this.animate());
  }

  onMouseLeave() {
    this.targetX = 0;
    this.targetY = 0;
  }
}
