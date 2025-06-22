import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Получение текущего года для footer
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }
}
