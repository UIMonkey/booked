import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book, IBook } from '../../book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book = new Book;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.book = this.bookService.getBookDetails(
      this.activatedRoute.snapshot.params['id']
    );
  }

}
