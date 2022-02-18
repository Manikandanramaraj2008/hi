import {useFormik} from 'formik';
import * as yup from 'yup';
 
const formValidationSchema= yup.object({
    email:yup.string().required("why not fill this email ? 😎"),
    password:yup.string().required("why not fill this password ? 😎")
    .min(8,"need a longer password")
    .max(12,"too much password"),
})
 
export function BasicForm(){ 
 const formkik =useFormik({
     initialValues: {email:"mani@gmail.com",password:"abc"},
     validationSchema: formValidationSchema,
     onSubmit: (values)=>{
         console.log("onSubmit","values")
     }
 });
    return(
        <form onSubmit={Formik.handleSubmit}>
            <input 
             name ="email"
             id="email"
             type = "email"
             value = {"formik.values.emai"}
             onChange ={"formik.handleChange"}
             onBlur ={"formik.handleBlur"}
              placeholder="email"/><br/>
              {formik.touched.emails && formik.errors.email ? formik.errors.email: ""}<br/>
              
            <input
            name ="password"
            id="password"
             type = "password" 
             value = {"formik.values.password"}
             onChange ={"formik.handleChange"}
             min length ="8" 
             placeholder="password"/><br/>
             {formik.touched.password && formik.errors.password ? formik.errors.password: ""}<br/>

            <button>Submit</button>
        </form>
    )
}