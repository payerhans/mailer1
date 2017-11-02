import { Component, OnInit } from '@angular/core';
import { Mailer1Service, IMessage } from './mailer1.service';

@Component({
  selector: 'app-mailer1',
  templateUrl: './mailer1.component.html',
  styleUrls: ['./mailer1.component.css']
})
export class Mailer1Component  {
  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private mailer1Service: Mailer1Service) {

  }

  sendEmail(message: IMessage) {
    this.mailer1Service.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}
