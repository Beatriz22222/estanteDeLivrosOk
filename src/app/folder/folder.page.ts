import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { InfiniteScrollCustomEvent} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  providers: [ApiService]
})
export class FolderPage {
  books: any[] = [];
  query: string = 'ionic framework';
  startIndex: number = 0;
  language: string = 'pt-BR'; // Idioma para tradução

  constructor(private bookApiService: ApiService,private router: Router) {
  this.searchBooks();
  }

  searchBooks() {
    this.startIndex = 0; // Reinicia o índice de busca
    this.books = []; // Limpa a lista de livros atual
    this.loadBooks();
  }

  loadBooks(event?:any) {
    if (!this.query.trim()) {
      if (event) {
        event.target.complete();
      }
      console.log("loadBooks = ",this.query);
      return ;
    }

    this.bookApiService.searchBooks(this.query, this.startIndex,this.language)
      .then(response => {
        this.books = this.books.concat(response.data.items);
        this.startIndex += 20; // Incrementa para buscar a próxima página
        if (event) {
          event.target.complete(); // Completa o evento de scroll infinito
        }
      })
      .catch(error => {
        console.error('Error loading books', error);
        if (event) {
          event.target.complete(); // Completa o evento em caso de erro
        }
      });
  }

  loadData(event:any) {
    this.loadBooks(event);
  }
  openBookDetails(book: any) {
    this.router.navigate([`/book-details`,book.id], {
      state: { book }
    });
  }
}