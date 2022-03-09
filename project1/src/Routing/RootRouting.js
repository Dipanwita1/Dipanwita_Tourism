import React from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import About from '../Components/About/About'
import Book from '../Components/Bookings/Book'
import Contact from '../Components/Contact/Contact'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'

import PNF from '../Components/PageNotFound/PNF'
import Reg from '../Components/Registration/Reg'
import Review from '../Components/Review/Review'
import TourismDetails from '../Components/Tourism/Details/TourismDetails'
import TourismCat from '../Components/Tourism/TourismCat/TourismCat'
import SubTourism from '../Components/Tourism/TourismSubcat/SubTourism'
import Header from '../Layout/Header'

import Protected from './Protected'
import Unauthorised from '../Components/Unauth/Unauthorised'
import Profile from '../Components/Logout/Logout'
const RootRouting = () => {
  return (
    
       <Router>
           <Header />
           <Routes>
               <Route path="" element={<Home />}/>
               
               <Route path="contact_page" element={<Contact />}/>
               <Route path="about_page" element={<About />}/>
               <Route path="reg_pg" element={<Reg />}/>
               <Route path="login_pg" element={<Login />}/>
             <Route path="logout" element={<Profile />}/>
             <Route element={<Protected />}>
               <Route path="book" element={<Book />}/> 
               </Route>
               <Route path="review" element={<Review />}/>
               <Route path="unauth" element={<Unauthorised />}/>
               
               
               <Route path="tourism" element={<TourismCat />} />
           

               

              <Route path="sub_tourism/:sid" element={<SubTourism />}/>
              <Route path="details/:sid/:tid" element={<TourismDetails />}/>
               <Route path="*" element={<PNF />}/>
           </Routes>
       </Router>

   
  )
}

export default RootRouting