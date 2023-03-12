import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent implements OnInit {
  @Output("srvCreated") serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent
    })
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }








}
