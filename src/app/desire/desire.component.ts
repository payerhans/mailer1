import { Component, OnInit } from '@angular/core';
import { DesireService, IMessage1 } from './desire.service';

@Component({
  selector: 'app-desire',
  templateUrl: './desire.component.html',
  styleUrls: ['./desire.component.css']
})

// ich folge da dem : https://stackoverflow.com/questions/42515409/angular-2-how-to-send-mail-php
export class DesireComponent implements OnInit {
  title = 'Desire PHP Email!';
  message: IMessage1 = {};

  constructor(private mailer1Service: DesireService) {

  }

  ngOnInit() {};

  sendEmail(message: IMessage1) {
    this.mailer1Service.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

}
