import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book, IBook } from './book';

const books: IBook[] = [
  {
    id: 'idaufbk192873',
    title: 'Book1',
    author: 'Terry Pratchett',
    subtitle: 'A book about something',
    price: 13.50,
  },
  {
    id: 'vsojn234',
    title: 'Book2',
    author: 'JKRawling',
    subtitle: 'Another book',
    price: 6.4,
  },
  {
    id: 'lfin3li4',
    title: 'Book3',
    author: 'A.nother',
    subtitle: 'A book, probably',
    price: 6.49,
  },
]

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {}

  getBooks(): Observable<IBook[]> {
    return of(books);
  }

  getBookDetails(id: string): IBook {
    const book = books.find(book => book.id === id);
    return book ? book : new Book();
  }
}
