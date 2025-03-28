import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookformComponent } from './books/bookform/bookform.component'; // ✅ Ensure correct import

export const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'books/add',
    component: BookformComponent, // ✅ Ensure correct component name
  },
];
