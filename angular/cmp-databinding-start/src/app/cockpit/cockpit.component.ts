import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent implements OnInit {
  @Output("srvCreated") serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  newServerName = '';
  newServerContent = '';
  // @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: newServerName.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    })
  }
  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }








}
