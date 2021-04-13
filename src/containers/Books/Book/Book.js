import React from 'react';
import Button from "../../../components/ButtonAdd/ButtonAdd";

const Book = (props) => {
  return (
    <>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.pagesNumber}</td>
      <td><Button btnType="btn-warning" click={props.edit}>Modification</Button></td>
      <td><Button btnType="btn-danger" click={props.deleteHandler}>Suppression</Button></td>
    </>
  )
};

export default Book;