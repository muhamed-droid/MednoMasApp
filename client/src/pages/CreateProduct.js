import React from 'react';
import { Formik, Form, Field, ErrorMessage} from "formik";
import './CreateProduct.css';
import axios from "axios";
import * as Yup from 'yup';

function CreateProduct() {

    const initialValues = {
        name:"",
        description:"",
        price:""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3).max(30).required(),
        description: Yup.string(),
        price: Yup.number().required()
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/products", data).then((response)=> {
        console.log("It worked");});
    };

  return (
    <div className="createProductPage">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="formContainer"> 
                <label> Name: </label>
                <ErrorMessage name="name" component="span"/>
                <Field autocomplete="off" id= "inputCreateProduct" name="name" placeholder="(Ex. Honey...)"/>    
                <label> Description: </label>
                <ErrorMessage name="description" component="span"/>
                <Field autocomplete="off" id= "inputCreateProduct" name="description" placeholder="(Ex. Honey from the deepest of Bosnian...)"/>    
                <label> Price: </label>
                <ErrorMessage name="price" component="span"/>
                <Field autocomplete="off" id= "inputCreateProduct" name="price" placeholder="(Ex. 20.0...)"/>  
                <button type="submit">Create Product </button>  
            </Form> 
        </Formik>
    </div>
  )
}

export default CreateProduct;
