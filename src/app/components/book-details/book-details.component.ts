import { Component, Input, OnInit } from '@angular/core';
import { Book, IBook } from '../../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() book = new Book();

  constructor() { }

  ngOnInit(): void {
  }

}
