import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit{

  newTitle : string = ""
  newAuthor : string = ""

  book: Book [] = []

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")
    this.book = savedBooks ? JSON.parse(savedBooks) : []
  }


  addBook(){
    if(this.newAuthor.length > 0 && this.newAuthor.length > 0){

      let newBook : Book = {
        id: Date.now(),
        title: this.newTitle,
        author: this.newAuthor
      }

      this.book.push(newBook)

      this.newTitle = ""
      this.newAuthor = ""

      localStorage.setItem("books", JSON.stringify(this.book))
      //alert(this.book.length)
    }
 }

 deleteBook(index:number){
   this.book.splice(index, 1)
   localStorage.setItem("books", JSON.stringify(this.book))
 }

}
