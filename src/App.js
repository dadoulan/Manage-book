import React, { Component } from 'react';
import Title from './components/Title/Title';
import Button from './components/ButtonAdd/ButtonAdd';
import Books from './containers/Books/Books';
import { render } from 'react-dom';

class App extends Component {

  state = {
    addBook: false
  }

  buttonStateHandler = () => {
    this.setState((oldState, props) => {
      return { addBook: !oldState.addBook }
    })
  }

  render() {
    return (
      <div className="container my-5">
        <Title>Page listant les livres</Title>
        <Books addBook={this.state.addBook} closeAddBook={() => this.setState({ addBook: false })} />
        <Button
          btnType="btn-success"
          options="w-50"
          click={this.buttonStateHandler}>
          {!this.state.addBook ? "Ajouter un livre" : "Fermer l'ajout d'un livre"}
        </Button>
      </div>
    );
  }
}

export default App;