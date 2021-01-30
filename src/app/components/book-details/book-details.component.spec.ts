import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { cold } from 'jasmine-marbles';
import { of, throwError } from 'rxjs';
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

  // beforeEach(async () => {
  //   const bookService = jasmine.createSpyObj('BookService', ['getBookDetails']);
  //   getBookDetailsSpy = bookService.getBookDetails.and.returnValue(throwError('BookService test failure'));

  //   await TestBed.configureTestingModule({
  //     imports: [RouterModule.forRoot(appRoutes)],
  //     declarations: [BookDetailsComponent],
  //     providers: [
  //       {
  //         provide: ActivatedRoute,
  //         useValue: {
  //           params: of({ id: 'idaufbk192873' })
  //         },
  //       },
  //       { provide: BookService, useValue: bookService }
  //     ]
  //   })
  //     .compileComponents();
  // });

  beforeEach(() => {
    const bookServiceSpy = jasmine.createSpyObj('BookService', ['getBookDetails']);
    getBookDetailsSpy = bookServiceSpy.getBookDetails.and.returnValue(of(testBook));
    // getBookDetailsSpy.and.returnValue(throwError('BookService test failure'));

    TestBed.configureTestingModule({
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
    });

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    bookDetailsDe = fixture.debugElement;
    bookDetailsEl = bookDetailsDe.nativeElement;
    bookService = bookDetailsDe.injector.get(BookService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should call BookService getBookDetails', () => {
    fixture.detectChanges();
    expect(bookService.getBookDetails).toHaveBeenCalled();
  });

  it('should call BookService getBookDetails with the correct parameters', () => {
    fixture.detectChanges();
    expect(bookService.getBookDetails).toHaveBeenCalledWith(testBook.id);
  });

  it('should display error when BookService fails', fakeAsync(() => {
    // tell spy to return an error observable
    getBookDetailsSpy.and.returnValue(throwError('BookService test failure'));

    fixture.detectChanges();  // onInit()
    // sync spy errors immediately after init

    tick();  // flush the component's setTimeout()

    fixture.detectChanges();  // update errorMessage within setTimeout()

    expect(component.errorMessage).toMatch(/test failure/, 'should display error');
    expect(bookDetailsEl.textContent).toBe('', 'should show placeholder');
  }));

  it('should display the book title', fakeAsync(() => {
    getBookDetailsSpy.and.returnValue(of(testBook));
    tick();
    fixture.detectChanges();
    const titleContent = bookDetailsEl.querySelector('h1');
    expect(titleContent?.textContent).toEqual(testBook.title);
  }));

  it('should show book details after getBookDetails', () => {
    // observable test quote value and complete(), after delay
    const q$ = cold('---x|', { x: testBook });
    // getQuoteSpy.and.returnValue( q$ );

    // fixture.detectChanges(); // ngOnInit()
    // expect(quoteEl.textContent).toBe('...', 'should show placeholder');

    // getTestScheduler().flush(); // flush the observables

    // fixture.detectChanges(); // update view

    // expect(quoteEl.textContent).toBe(testQuote, 'should show quote');
    // expect(errorMessage()).toBeNull('should not show error');
  });
});
