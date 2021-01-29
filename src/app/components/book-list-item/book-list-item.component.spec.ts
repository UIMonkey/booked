import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book, IBook } from '../../book';

import { BookListItemComponent } from './book-list-item.component';

describe('BookListItemComponent', () => {
  let component: BookListItemComponent;
  let fixture: ComponentFixture<BookListItemComponent>;
  let bookListItemDB: DebugElement;
  let bookListItemEl: HTMLElement;

  const mockBook: IBook = {
    title: 'Book1',
    author: 'Terry Pratchett',
    subtitle: 'A book about something',
    price: 13.50,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookListItemDB = fixture.debugElement;
    bookListItemEl = bookListItemDB.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a blank title on initialisation', () => {
    const title = bookListItemEl.querySelector('h1');
    expect(title?.textContent).toBe('');
  });

  it('should display the title of the passed in book', () => {
    component.book = mockBook;
    fixture.detectChanges();
    const title = bookListItemEl.querySelector('h1');
    expect(title?.textContent).toBe('Book1');
  });

  it('should display the subtitle of the passed in book', () => {
    component.book = mockBook;
    fixture.detectChanges();
    const title = bookListItemEl.querySelector('h2');
    expect(title?.textContent).toBe('A book about something');
  });

  it('should display the author of the passed in book', () => {
    component.book = mockBook;
    fixture.detectChanges();
    const title = bookListItemEl.querySelector('h4');
    expect(title?.textContent).toBe('Terry Pratchett');
  });

  it('should emit the selected book', () => {
    let selectedBook = new Book;
    component.bookSelected.subscribe((book: IBook) => {
      selectedBook = book;
      expect(selectedBook).toBe(mockBook);
    });
  
    bookListItemDB.triggerEventHandler('click', null);
  });
});
