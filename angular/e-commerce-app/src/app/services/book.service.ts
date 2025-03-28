import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Book from '../../types/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<[Book]>(`${this.apiURL}/books`);
  }
  addBook(book: Book) {
    return this.http.post<[Book]>(`${this.apiURL}/create-book`, book);
  }
  deleteBook(id: number) {
    return this.http.delete(`${this.apiURL}/delete-book/${id}`);
  }

  updateBook(book: Book) {
    return this.http.put(`${this.apiURL}/update-book/${book.id}`, book);
  }
}
