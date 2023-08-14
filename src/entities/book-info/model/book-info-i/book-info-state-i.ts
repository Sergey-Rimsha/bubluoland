import { BookInfoI } from 'entities/book-info/model/book-info-i/book-info-i';
import { ErrorResponseI } from 'interface/utils-i';

export interface BookInfoStateI {
  book: BookInfoI;
  error: ErrorResponseI | null;
}