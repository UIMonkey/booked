import { Routes } from "@angular/router";
import { BookDetailsComponent } from "./components/book-details/book-details.component";
import { BookListComponent } from "./components/book-list/book-list.component";

export const appRoutes: Routes = [
    { path: 'books', component: BookListComponent },
    { path: 'books/:id', component: BookDetailsComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full'}
]