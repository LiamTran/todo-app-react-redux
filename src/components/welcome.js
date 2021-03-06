/*==========================================
                    Package
/*==========================================*/

import React,{Component} from 'react';
import {Link} from 'react-router-dom';



/*==========================================
                    Body
/*==========================================*/

class WelCome extends Component{
  render() {
    return (
      <div>
        <div className="welcome-box">
          <h1>Welcome to TodoApp</h1>
          <div className="">
            <div className="btnProps">
              <Link to='/users/login' 
                className="btn btn-primary btn-lg">Login</Link>
            </div>
            <div className="btnProps">
              <Link to='/users/new' 
                className="btn btn-primary btn-lg">Create New Account</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 

export default WelCome;