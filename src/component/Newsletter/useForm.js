import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { helpHttp } from "./helper";

export const useForm = (
 initialForm,
 validationForm,
 updateData,
 dataToEdit
) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false);
 const [response, setResponse] = useState(null);

 useEffect(() => {
  if (dataToEdit) {
   setForm(dataToEdit);
  } else {
   setForm(initialForm);
  }
 }, [dataToEdit]);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
   ...form,
   [name]: value
  });
 };


 const handleSubmit = (e) => {
    handleChange(e);
  e.preventDefault();
  setErrors(validationForm(form));
  console.log(form);

  if (Object.keys(errors).length === 0) {
   setLoading(true);
   helpHttp()
    .post("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
     body: form,
     headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
     }
    })
    .then((res) => {
     setLoading(false);
     setResponse(true);
     setForm(initialForm);
     setTimeout(() => setResponse(false), 5000);
    });
  } else if (!form.id === null) {
   updateData(form);
  } else {
   return;
  }
 };
 return {
  form,
  errors,
  loading,
  response,
  handleChange,
  handleSubmit
 };
};
