import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css'],
})
export class BookformComponent {
  bookForm: FormGroup;
  private bookService = inject(BookService);

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required], // ✅ Required field
      author: ['', Validators.required], // ✅ Required field
      year: [
        '',
        [
          Validators.required,
          Validators.min(1800),
          Validators.max(new Date().getFullYear()),
        ],
      ], // ✅ Must be within a valid range
      description: ['', [Validators.required, Validators.minLength(10)]], // ✅ Required with min length
    });
  }

  addBook() {
    console.log('Book Data:', this.bookForm.value);
    if (this.bookForm.valid) {
      console.log('✅ Form is valid, submitting data...');
      const model = this.bookForm.value;

      this.bookService.addBook(model).subscribe({
        next: () => {
          alert('✅ Book added successfully!'); // ✅ Success alert
          this.bookForm.reset();
        },
        error: (err) => {
          console.error('Error adding book:', err);
          alert('❌ Failed to add book. Please try again!'); // ✅ Error alert
        },
      });
    } else {
      console.log('❌ Form is invalid!');
      alert('⚠ Form is invalid! Please check all fields.'); // ✅ Alert for invalid form
    }
  }
}

export default BookformComponent;
