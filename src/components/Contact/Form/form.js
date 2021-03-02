import {useState, useEffect} from 'react';
import axios from 'axios';

const FormDetails = (Formsubmit, validate)=>{
    const [ServiceStatus, setServiceStatus]= useState('development')
    //saving the form details into state
    const [values, setValues] = useState({
      unames: "",
      email: "",
      message: "",
      service: ServiceStatus,
    });
    
    //error submittion
    const [submitError, setSubmitError] = useState({});
    //set the errors
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmit] = useState(false);

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleServiceSelection= (status)=>{
        setServiceStatus(`${status}`)
        setValues({
            ...values,
            service: status
        })
        console.log('Values',values);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(values));
      setIsSubmit(true);
    };

    
  useEffect(() => {
      
    if (Object.keys(errors).length === 0 && isSubmitting) {
      axios
        .post("https://paintdepo.herokuapp.com/send/", values)
        .then((success) => {
          Formsubmit();
        })
        .catch((error) => {
          setSubmitError({
            submiterror: "message not sent",
          });
        });
    }
  }, [errors, isSubmitting, Formsubmit, setSubmitError, values]);


    return {
      handleChange,
      values,
      handleSubmit,
      errors,
      submitError,
      handleServiceSelection,
    };

};

export default FormDetails;