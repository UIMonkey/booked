// import { DebugElement } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';
// import { IBook } from '../book';
// import { BookService } from '../book.service';

// import { BookListComponent } from './book-list.component';

// describe('BookListComponent', () => {
//   let component: BookListComponent;
//   let fixture: ComponentFixture<BookListComponent>;

//   let getBooksSpy: jasmine.Spy;

//   const testBooks: IBook[] = [
//     {
//       title: 'Test Book',
//       author: 'Testy Author',
//       subtitle: 'A book about something',
//       price: 13.50,
//     }
//   ]

//     // Create a fake mockBookService object with a `getQuote()` spy
//     const mockBookService = jasmine.createSpyObj('BookService', ['getBooks']);
//     // Make the spy return a synchronous Observable with the test data
//     getBooksSpy = mockBookService.getQuote.and.returnValue(of(testBooks));

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ BookListComponent ],
//       providers: [{provide: BookService, useValue: mockBookService}]
//     })
//     .compileComponents();
//   });
  
//   beforeEach(() => {
//     fixture = TestBed.createComponent(BookListComponent);
//     const bannerDe: DebugElement = fixture.debugElement;
//     const bannerEl: HTMLElement = bannerDe.nativeElement;
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//     expect(component).toBeDefined();
//   });

//   it('should inject book service', () => {
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.book-item').textContent).toContain('booked app is running!');
//   });

//   // it('should show quote after component initialized', () => {
//   //   fixture.detectChanges();  // onInit()
//   //   quoteEl = fixture.nativeElement.querySelector('.book-item');
//   //   // sync spy result shows testQuote immediately after init
//   //   expect(compiled).toBe(testBooks);
//   //   expect(getBooksSpy.calls.any()).toBe(true, 'getQuote called');
//   // });

// });
