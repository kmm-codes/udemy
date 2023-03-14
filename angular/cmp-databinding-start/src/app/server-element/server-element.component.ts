import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']

})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement')
  element: { type: string, name: string, content: string };
  @Input() name: string;
  @Input('nochEineProperty') nochEineProperty: string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') contentParagraph:ElementRef;

  constructor() {
    console.log('constructor called')
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes)
  }
  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log('Text Content: ' + this.header?.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
    console.log('contentParagraph Content: ' + this.contentParagraph?.nativeElement.textContent)
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
    console.log('Text Content: ' + this.header?.nativeElement.textContent);
    console.log('contentParagraph Content: ' + this.contentParagraph?.nativeElement.textContent)
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }







  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }

}
