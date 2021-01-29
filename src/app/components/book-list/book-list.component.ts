import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../../book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$ = new Observable<IBook[]>();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBooks();
  }

  bookSelected() {
    
  }

}
