import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import Book from '../../types/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'], // ✅ Fixed "styleUrls"
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        console.log('📚 Books Data:', books);
        this.books = books;
      },
      error: (err) => {
        console.error('❌ Error fetching books:', err);
        alert('⚠ Failed to load books. Please try again!');
      },
    });
  }
}
