import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, share, switchMap } from 'rxjs/operators';
import { BookService } from '../../book.service';
import { Book, IBook } from '../../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$ = new Observable<IBook>();
  errorMessage = '';

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.book$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => this.bookService.getBookDetails(params['id'] || '').pipe(
        catchError((err: any) => {
          // Wait a turn because errorMessage already set once this turn
          setTimeout(() => {
            this.errorMessage = err.message || err.toString()
            console.log(this.errorMessage)
          });
          return of(new Book); // reset message to placeholder
        })
      )),
      share()
    )
  }

}
