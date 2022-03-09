import React from 'react'
import {useFormik} from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube,faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Reg.css'



const Reg = () => {
  const navigate=useNavigate();
  const ValidateForm =(formValue)=>{
    const errors={};
    
    const reg_exp_email=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const reg_exp_password=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{4,10}$/
     
    if(!formValue.username){
        errors.username="Please enter username";
        } else if(formValue.username.length<3){
            errors.username="minlength 3";
        }
       

        if(!formValue.password){
            errors.password="Please enter password";
        }else if(!reg_exp_password.test(formValue.password)){
               errors.password="Invalid password";
          }

        if(!formValue.email){
            errors.email="Please enter email";
        }else if(!reg_exp_email.test(formValue.email)){
            errors.email="Invalid form";
        }
        console.log("Error: ",errors);
return errors;
}
const formik=useFormik({
  initialValues:{
      username:'',
      email:'',
      password:''
  },
  validate:ValidateForm,
  onSubmit:(values)=>{
      console.log("Received values :",values);
      axios.post('https://node-project-storage.herokuapp.com/postUserData',values)
  .then((res)=>{
      console.log("Axios Response:",res);
      alert("Registration Successful")
      navigate('/login_pg')
  })
  .catch(err=>{
      console.log("Axios error:",err);
  })
  }
});
  return (
    <div className='hero'>
      <div className='form-box'>
        <div className='button-box'>
          <div className='btn-btn'> </div>
          
            <button type="button" className='toggle-btn' >Register</button>
            
            </div>
           
            {/* <div className='social-icons'>
             <h5><FontAwesomeIcon icon={faFacebook} className="social-icons1"></FontAwesomeIcon></h5>
           <h5><FontAwesomeIcon icon={faYoutube} className="social-icons1"></FontAwesomeIcon></h5>
           <h5><FontAwesomeIcon icon={faInstagram}className="social-icons1"></FontAwesomeIcon></h5>
            </div> */}
         
       
     
     
     
      <form onSubmit={formik.handleSubmit} className="input-group">

        <input type="text" name="username" placeholder="User ID" value={formik.values.username}
         onChange={formik.handleChange}
          onBlur={formik.handleBlur} className='input-field'
          >
              </input><br /><br />
         {formik.touched.username && formik.errors.username ?
          (<span style={{color:'red'}}>{formik.errors.username}</span>):null}
<br /><br />
{/* <label>Email :</label> */}
        <input type="email" name="email" placeholder="Email" value={formik.values.email}
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur} className='input-field'
         ></input><br /><br />
        {formik.touched.email && formik.errors.email ?
          (<span style={{color:'red'}}>{formik.errors.email}</span>):null}
<br /><br />
        {/* <label>Password :</label> */}
        <input type="password" name="password" placeholder="Password" value={formik.values.password} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} className='input-field'
        ></input><br /><br />
        {formik.touched.password && formik.errors.password ?
          (<span style={{color:'red'}}>{formik.errors.cityNames}</span>):null} 

<input type="checkbox" name="checkbox" className='check-box'></input><br/>
<label className='checkbox'>I agree with the Terms and Conditions</label><br/>
  <p> <button type="submit" className='submit-btn'>Register</button></p><br/><br/>
 
  <button  className='btn'><Link to={"/login_pg"}>Already have account ?Login now</Link></button>
    
    </form>
    </div>
    </div>
  )
}

export default Reg