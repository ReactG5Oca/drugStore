import React, { Component } from "react";
import '../style/UserProfile.css';
import Weather from './Weather'

class UserProfile extends Component{


    render(){
 
        return(
        <>
            <Weather />

            <h1 className='UserProfileh1'>UserProfile</h1>

            
               
     <div className='image-information-container'>
               <div className='image-container'  >
                 <img src='../assets/images/Default.jfif' alt='Default_Image'/>
           </div>
         <div className='information-container'>
               <h1>information</h1>
                    <p>First Name :haneen </p>
                   <p>Last Name:edinat </p>
                    <p>Phone number:088888888888</p>
                  <p>Email:haneneeee@hga;dkkf</p>
       
                 </div>
                 </div>
            
       
</>
        )
    }
}

export default UserProfile;