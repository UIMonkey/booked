import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../../book';
import { BookService } from '../../book.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$ = new Observable<IBook[]>();

  constructor(
    private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.bookList$ = this.bookService.getBooks();
  }

  bookSelected(selectedBook: IBook) {
    this.router.navigate([`books/${selectedBook.id}`])
  }

}
