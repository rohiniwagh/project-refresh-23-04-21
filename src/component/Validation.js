
export default function Validation(values) {
  let errors = {}
  //Name validation
  if (!values.Firstname.trim())
   {
    errors.Firstname = `First Name required`;
   
  }
  if (!values.inputMName.trim())
   {
    errors.inputMName = `Middle Name required`;
  }
  if (!values.inputLName.trim())
   {
    errors.inputLName = 'Last Name required';
  }

  //Email validation

  if (!values.inputemail) {
    errors.inputemail = `Email Required`;
  } else if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.inputemail
    )
  ) {
    errors.inputemail = 'Email address is invalid';
  }

  //Age validation
 
    if (!values.inputedate) {
      errors.inputedate = "Age is required";
    }
    else if (values.inputedate < 18) {
     errors.inputedate = "Age must be at least 18";
    }
    else if (values.inputedate > 99) {
      errors.inputedate = "Age must be under 99";
    }
   
  // pan Validtion
    if (/^([A-Z]){5}([0-9]){4}[A-Z]{1}$/.test(values.inputpan))
     {
        errors.inputpan="Pan card number should be of 10-characters";
     }
    else if (values.inputpan.length!==10) 
    {
      errors.inputpan="Add your pan card number properly ";
    }
  
   
  // income Validation
     if(!values.inputincome)
     {
        errors.inputincome = "Invalid Income";
     }
     else if (isNaN(values.inputincome) || values.inputincome < 5 || values.inputincome > 25)
      {
        errors.inputincome = "Income";
    }

    // Moblie validtion
    if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.inputmob))
    {
        errors.inputmob="Enter the valid Mobile Number(Like : 9566137117)";
    }
    else if(isNaN(values.inputmob))
    {
        errors.inputmob="invalid number";
    }
    return errors;
}

