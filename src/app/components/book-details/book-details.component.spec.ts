import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { IBook } from 'src/app/book';
import { BookService } from 'src/app/book.service';
import { appRoutes } from 'src/app/routes';

import { BookDetailsComponent } from './book-details.component';

fdescribe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let bookDetailsDe: DebugElement;
  let bookDetailsEl: HTMLElement;
  let getBookDetailsSpy: jasmine.Spy;
  let bookService: BookService;

  const testBook: IBook = {
    id: 'idaufbk192873',
    title: 'Book1',
    author: 'Terry Pratchett',
    subtitle: 'A book about something',
    price: 13.50,
  }
  const bookServiceSpy = jasmine.createSpyObj('BookService', ['getBookDetails']);
  getBookDetailsSpy = bookServiceSpy.getBookDetails.and.returnValue(of(testBook));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(appRoutes)],
      declarations: [BookDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'idaufbk192873' })
          },
        },
        { provide: BookService, useValue: bookServiceSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookDetailsDe = fixture.debugElement;
    bookDetailsEl = bookDetailsDe.nativeElement;
    bookService = bookDetailsDe.injector.get(BookService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should call BookService getBookDetails', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    expect(bookServiceSpy.getBookDetails).toHaveBeenCalled();
  }));

  it('should call BookService getBookDetails with the correct parameters', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    expect(bookServiceSpy.getBookDetails).toHaveBeenCalledWith(testBook.id);
  }));

  it('should display the book title', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const titleContent = bookDetailsEl.querySelector('h1');
    expect(titleContent?.textContent).toEqual(testBook.title);
  }));
});
