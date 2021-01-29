import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';
import { BookService } from '../../book.service';
import { IBook } from '../../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$ = new Observable<IBook>();

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.book$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => this.bookService.getBookDetails(params['id'] || '')),
      share()
    )
  }

}
