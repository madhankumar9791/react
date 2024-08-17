import React from "react";
import { Formik, Form, Field } from 'formik';



export default function Boo()
{

    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Enter Mail id';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
      
      function validateUsername(value) {
        let error;
        if (value === 'admin') {
          error = 'Nice try!';
        }
        return error;
      }

    return(
        <>
        
        <h1> Sign Up</h1>


        


        <Formik  initialValues={{
         username: '',
         email: 'abc',
       }}
       
     >

       { ({errors, touched, isValidating}) =>
       (
<Form>
           <Field name="email" validate={validateEmail} />
           { <div>{errors.email}</div>}
 
           <Field name="username" validate={validateUsername} />
           {errors.username && touched.username && <div>{errors.username}</div>}
 
           <button type="submit">Submit</button>
         </Form>


       )

       }
         

     </Formik>
        
        </>
    )
}