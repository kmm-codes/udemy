import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../appServices/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

constructor(private loggingService: LoggingService) {

}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.loggingService.logStatusChanged(accountStatus)
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
