import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `<p class="text-success">Thank's for submiting your appliction we'll soon reach you in your mail</p>`,
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
