
import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const elementPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition > elementPosition) {
      this.renderer.addClass(this.el.nativeElement.querySelector('.mat-card'), 'visible');
    }
  }
}
