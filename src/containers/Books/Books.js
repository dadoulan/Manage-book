import React, { Component } from "react";
import Book from "./Book/Book";
import FormAddBook from "./FormAddBook/FormAddBook";
import FormEditBook from "./FormEditBook/FormEditBook";
import Alert from "../../components/Alert/Alert";

class Books extends Component {

  state = {
    books: [
      { id: 1, title: "L'algorithmie selon h2prog", author: "h2prog", pagesNumber: 200 },
      { id: 2, title: "La france du XIXè siècle", author: "LouisXX", pagesNumber: 251 },
      { id: 3, title: "Harry Potter", author: "Lacel", pagesNumber: 631 },
      { id: 4, title: "Steve Jobs - Autobiographie", author: "Steve", pagesNumber: 341 },
    ],
    lastIdBook: 4,
    idEditBook: 0,
    alertMessage: {
      message: null,
      type: null,
    }
  };

  deleteHandler = (id) => {

    const bookID = this.state.books.findIndex(book => {
      return book.id === id
    });

    const newTab = [...this.state.books];
    newTab.splice(bookID, 1);

    this.setState({
      books: newTab,
      alertMessage: {
        message: "Suppression effectué",
        type: "alert-danger",
      }
    });
  }

  addBookHandler = (title, author, pagesNumber) => {
    const newBook = {
      id: this.state.lastIdBook + 1,
      title: title,
      author: author,
      pagesNumber: pagesNumber,
    };

    const newListBooks = [...this.state.books];
    newListBooks.push(newBook);

    this.setState(oldstate => {
      return {
        books: newListBooks,
        lastIdBook: oldstate.lastIdBook + 1,
        alertMessage: {
          message: "Ajout effectué",
          type: "alert-success",
        }
      }
    });

    this.props.closeAddBook();

  }

  editBookHandler = (id, title, author, pagesNumber) => {
    // Cherche index 
    const seekId = this.state.books.findIndex(book => {
      return book.id === id;
    })

    const newLivre = { id, title, author, pagesNumber }

    const newListBooks = [...this.state.books];
    newListBooks[seekId] = newLivre;

    this.setState({
      books: newListBooks,
      idEditBook: 0,
      alertMessage: {
        message: "Modification effectué",
        type: "alert-warning",
      }
    });
  }

  render() {
    return (
      <>
        {this.state.alertMessage && <Alert options={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
        <table table className="table text-center" >
          <thead>
            <tr className="table-dark">
              <th>Titre</th>
              <th>Auteur</th>
              <th>Nombre de pages</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(book => {
              if (book.id !== this.state.idEditBook) {
                return (
                  <tr key={book.id}>
                    <Book
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      pagesNumber={book.pagesNumber}
                      deleteHandler={() => this.deleteHandler(book.id)}
                      edit={() => this.setState({ idEditBook: book.id })}
                    />
                  </tr>
                )
              } else {
                return (
                  <tr key={book.id}>
                    <FormEditBook
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      pagesNumber={book.pagesNumber}
                      editBook={this.editBookHandler}
                      cancelHandler={() => this.setState({ idEditBook: 0 })}
                    />
                  </tr>
                )
              }

            })}
          </tbody>
        </table>
        {this.props.addBook && <FormAddBook validation={this.addBookHandler} />}
      </>

    )
  }
}

export default Books