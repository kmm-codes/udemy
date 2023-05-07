import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackgroundColor: string = 'transparent';
  @Input() defaultColor: string = 'black';
  @Input('appBetterHighlight') highlightColor: string = 'white';
  @Input() highlightBackgroundColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor = this.defaultBackgroundColor
    this.color = this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue')
    // this.renderer.setStyle(this.elRef.nativeElement,'color', 'white')
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'blue')
    // this.renderer.setStyle(this.elRef.nativeElement,'color', 'white')
    this.backgroundColor = this.highlightBackgroundColor
    this.color = this.highlightColor

  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color', 'transparent')
    // this.renderer.setStyle(this.elRef.nativeElement,'color', 'black')
    this.backgroundColor = this.defaultBackgroundColor
    this.color = this.defaultColor
  }
}
