import React, { Component } from 'react';
import Button from "../../../components/ButtonAdd/ButtonAdd";
import { withFormik } from "formik";
import * as Yup from "yup";

class FormAddBook extends Component {

  // En commentaire car utilisation de formik
  // state = {
  //   inputTitle: "",
  //   inputAuthor: "",
  //   inputPagesNumber: "",
  // }

  // Commentaire ici aussi car : plus de state
  // validationFormHandler = (event) => {
  //   event.preventDefault();
  //   this.props.validation(this.state.inputTitle, this.state.inputAuthor, this.state.inputPagesNumber)
  //   this.setState({
  //     inputTitle: "",
  //     inputAuthor: "",
  //     inputPagesNumber: "",
  //   })
  // }

  render() {
    return (
      <>
        <h2
          className="text-center text-primary mt-5"
          style={{ fontFamily: "Sigmar One" }}>
          Affichage formulaire d'ajout
        </h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Titre du livre</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.props.values.title}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
            // value={this.state.inputTitle}
            // onChange={(event) => this.setState({ inputTitle: event.target.value })}
            />
            {
              this.props.touched.title && this.props.errors.title
              && <span style={{ color: "red" }}>{this.props.errors.title}</span>
            }


          </div>
          <div className="form-group">
            <label htmlFor="author">Auteur du livre</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={this.props.values.author}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
            // value={this.state.inputAuthor}
            // onChange={(event) => this.setState({ inputAuthor: event.target.value })}
            />
            {
              this.props.touched.author && this.props.errors.author
              && <span style={{ color: "red" }}>{this.props.errors.author}</span>
            }

          </div>
          <div className="form-group">
            <label htmlFor="pagesNumber">Nombre de pages</label>
            <input
              type="number"
              className="form-control"
              id="pagesNumber"
              name="pagesNumber"
              value={this.props.values.pagesNumber}
              onChange={(event) => this.props.setFieldValue('pagesNumber', parseInt(event.target.value))}
              onBlur={this.props.handleBlur}
            // value={this.state.inputPagesNumber}
            // onChange={(event) => this.setState({ inputPagesNumber: event.target.value })}
            />
            {
              this.props.touched.pagesNumber && this.props.errors.pagesNumber
              && <span style={{ color: "red" }}>{this.props.errors.pagesNumber}</span>
            }
          </div>
          {/* <Button btnType="btn-primary" click={this.validationFormHandler}> Valider </Button> */}
          <Button btnType="btn-primary" click={this.props.handleSubmit}> Valider </Button>
        </form>
      </>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    title: "",
    author: "",
    pagesNumber: "",
  }),//Module YUP pour gerer les erreurs
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(3, "Le titre doit avoir plus de 3 caractères")
      .max(15, "Le titre doit avoir moins de 15 caractères")
      .required("Le titre est obligatoire"),
    author: Yup.string()
      .min(3, "L'auteur doit avoir plus de 3 caractères")
      .required("Le titre est obligatoire"),
    // pour utiliser yup.number => convertir pagesNumber en int;
    pagesNumber: Yup.number()
      .lessThan(1000, "Nombre de pages < 1000")
      .moreThan(50, "Nombre de pages > 50")
  }),
  // validate: values => {
  // const errors = {};
  // if (values.title.length < 3) {
  //   errors.title = "Le titre doit avoir plus de 3 caractères";
  // }
  // if (values.title.length > 15) {
  //   errors.title = "Le titre doit avoir moins de 15 caractères";
  // }
  // if (!values.author) {
  //   errors.author = "Le champs auteur est obligatoire.";
  // }
  // if (isNaN(values.pagesNumber)) {
  //   errors.pagesNumber = "Ce champs ne doit contenir que des chiffres";
  // }
  // return errors


  // },
  handleSubmit: (values, { props }) => {
    props.validation(values.title, values.author, values.pagesNumber);
  }
})(FormAddBook);