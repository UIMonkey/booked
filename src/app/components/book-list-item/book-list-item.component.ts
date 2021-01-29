import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book, IBook } from '../../book';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent {

  @Input() book = new Book;
  @Output() bookSelected = new EventEmitter<IBook>();

  selectBook() {
    this.bookSelected.emit(this.book);
  }

}
