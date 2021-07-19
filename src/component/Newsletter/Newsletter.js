import React from "react";
import "./Newsletter.css";
import { useForm } from "./useForm";

const initialForm = {
 name: "",
 email: ""
};

const validationForm = (form) => {
 let errors = {};
 let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
 let regexemail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 if (!form.name.trim()) {
  errors.name = "Ingrese su nombre.";
 } else if (!regexName.test(form.name.trim())) {
  errors.name = "El nombre es incorrecto";
 }
 if (!form.email.trim()) {
  errors.name = "Ingrese su nombre.";
 } else if (!regexemail.test(form.email.trim())) {
  errors.email = "El nombre es incorrecto";
 }
 return errors;
};

let styles = {
    fontWeight: "bold",
    color: "#dc3545",
    fontSize:'12px'
   };

const Newsletter = () => {
    const {
        form,
        errors,
        handleChange,
        handleSubmit,
       } = useForm(initialForm, validationForm);
 return (
  
   <form onSubmit={handleSubmit} className="row formulario">

     <h5>¡Únete a nuestras novedades y promociones!</h5>
    
    <div className="column">
    <input
      className="textInput"
      placeholder="Ingresa tu nombre"
      required
      onChange={handleChange}
      name='name'
      type="Ingresa tu nombre"
      value={form.name}
     />
     {errors.name && <p style={styles}>{errors.name}</p>}
     <input
      className="textInput"
      placeholder="Ingresa tu email"
      required
      onChange={handleChange}
      name='email'
      type="Ingresa tu email"
      value={form.email}
     />
     {errors.email && <p style={styles}>{errors.email}</p>}
     <button className="suscribe">Suscribirme</button>
    </div>
  
   </form>
 
 );
};

export default Newsletter;
