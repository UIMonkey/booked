import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { appRoutes } from './routes';

describe('AppComponent', () => {
  
  let location: Location;
  let router: Router;
  let fixture;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes)
      ],
      declarations: [
        AppComponent,
        BookListComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes)
      ],
      declarations: [
        AppComponent,
        BookListComponent
      ]
    });
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'booked'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('booked');
  });

  it('navigate to "" redirects you to /books', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/books');
  }));

  it('navigate to "/books" should display the book list component you to /books', fakeAsync(() => {
    router.navigate(['/books']);
    tick();
    expect(location.path()).toBe('/books');
  }));
});
