import { useState } from "react";

const UseForm = validation => {
  const [values, setValues] = useState({
    Firstname:'',
    inputMName:'',
    inputLname:'',
    inputemail:'',
    inputmob: '',
    inputpan: '',
    inputdate:''
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validation(values));
  };
  return { handleChange, values, handleSubmit, errors};
};
export default UseForm;
