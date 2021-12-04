import React, { Component } from 'react';
import '../style/Login.css'
class Login extends Component {
    constructor(){
    super();
        this.state={
            username:'',
            password:'',
            validuser:''
        }
    }
    
    loginsubmit=async (e)=>{
      e.preventDefault();
      await this.setState({
        username:e.target.name.value,
        password:e.target.password.value
      })
      
      let allobj=JSON.parse(localStorage.getItem("users"));
     
        allobj.forEach(element => {
        if(this.state.username===element.username && this.state.password===element.password)
        {
            // alert('congratulations')
          let name=element.username
          let pass=element.password
          let email=element.email
          let activeuser={name,email,pass}
          localStorage.setItem("active",JSON.stringify(activeuser));
        }
        // else if(this.state.username!=element.username || this.state.password!=element.password){
        //     alert('you are not user')
        // }
      });
      }
      
  render() {

    return (

      <div className="login"> 
               <form className="form-container" onSubmit={this.loginsubmit}>
                <h1 style={{fontFamily: 'sans-serif'}}>Sign In</h1>
              
               <input type='text' placeholder="UserName" name='name' required/><br/>
              
               <input type='text' placeholder="Password" name='password' required/><br/>

               <button type="submit" style={{color:'white'}}>login</button>
               {/* {this.state.validuser ? <Link to='/posts'></Link> :''} */}
               </form>

      </div>
    );
  }

}

export default Login;
