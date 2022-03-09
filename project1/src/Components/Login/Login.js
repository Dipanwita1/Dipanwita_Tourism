import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'

  const ValidateF =(formVal)=>{
    const errors={};
    const reg_exp_email=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
   
  if(!formVal.password){
        errors.password="Please enter password";
    }
    
if(!formVal.email){
        errors.email="Please enter email";
    }
else if(!reg_exp_email.test(formVal.email)){
        errors.email="Invalid form";
    }
    console.log("Error; ",errors);
return errors;
}
const Login = () => {
  const navigate=useNavigate();
const formik=useFormik({
  initialValues:{
      email:'',
      password:''
  },
  validate:ValidateF,
  onSubmit:(values)=>{
      console.log("Received values :",values);
      axios.post('https://node-project-storage.herokuapp.com/postLoginData',values)
      .then((res)=>{
          console.log("Axios Response:",res.data);
          alert("You have successfully logged in") 
          window.sessionStorage.setItem("Token:",res.data.token)
           navigate('/book')
           
         
          
      })
      .catch(err=>{
          console.log("Axios error:",err);
      })
  }
})
  return (
    <div className='hero'>
      <div className='form-box'>
        <div className='button-box'>
          <div className='btn-btn1'></div>
          
          <button type="button" className='toggle-btn' >Login</button>
            
            </div>
           
            {/* <div className='social-icons'>
             <h5><FontAwesomeIcon icon={faFacebook} className="social-icons1"></FontAwesomeIcon></h5>
           <h5><FontAwesomeIcon icon={faYoutube} className="social-icons1"></FontAwesomeIcon></h5>
           <h5><FontAwesomeIcon icon={faInstagram}className="social-icons1"></FontAwesomeIcon></h5>
            </div> */}
         
       
     
     
     
      <form onSubmit={formik.handleSubmit} className="input-group">

        
        <input type="email" name="email" placeholder="Email" value={formik.values.email}
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur} className='input-field'
         ></input><br /><br />
        {formik.touched.email && formik.errors.email ?
          (<span style={{color:'red'}}>{formik.errors.email}</span>):null}
<br /><br />
      
        <input type="password" name="password" placeholder="Password" value={formik.values.password} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} className='input-field'
        ></input><br /><br />
        {formik.touched.password && formik.errors.password ?
          (<span style={{color:'red'}}>{formik.errors.cityNames}</span>):null} 


<button type="submit"
   disabled={!(formik.isValid && formik.dirty)}className='submit-btn1' >Login</button>
   {/* <button type="submit" className='submit-btn1'>Login</button><br/><br/> */}
  <br/><br/>
 <button  className='btn'><Link to={"/reg_pg"}>Don't have an account?Register Here</Link></button>
 
  
    </form>

    
    
    
   
    
    </div>
    </div>
  )
}

export default Login