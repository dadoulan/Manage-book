import React, { Component } from 'react';
import Button from "../../../components/ButtonAdd/ButtonAdd";

class FormEditBook extends Component {

  state = {
    inputTitle: this.props.title,
    inputAuthor: this.props.author,
    inputPagesNumber: this.props.pagesNumber,
  }



  validationHandler = () => {
    this.props.editBook(this.props.id, this.state.inputTitle, this.state.inputAuthor, this.state.inputPagesNumber);
  }

  render() {
    return (
      <>
        <td><input type="text" className="form-control" value={this.state.inputTitle} onChange={(event) => this.setState({ inputTitle: event.target.value })} /></td>
        <td><input type="text" className="form-control" value={this.state.inputAuthor} onChange={(event) => this.setState({ inputAuthor: event.target.value })} /></td>
        <td><input type="text" className="form-control" value={this.state.inputPagesNumber} onChange={(event) => this.setState({ inputPagesNumber: event.target.value })} /></td>
        <td><Button btnType="btn-primary" click={this.validationHandler}>Validation</Button></td>
        <td><Button options="border" click={this.props.cancelHandler}>Annuler</Button></td>
      </>
    );
  }
}


export default FormEditBook;