
import {Link } from "react-router-dom"

function CustomerLogin(){
    return(
        <>
        <div className="btnDiv">
       <button id="loginBttn"> Customer Login</button><br/>
       </div>
        <div className="MainLogin">
        
        <lable>Username or email address</lable><br/>
        <input type="text"></input><br />
        <lable>Password</lable><br />
        <input type="password"></input><br/>
        <div className="loginEnd">
            <button id="EndBtn">Login</button>
            <Link to="/CustomerSignup"> Signup</Link>
            <a href=".">Lost Your Password ?</a>
        </div>
        </div>
        </>
    )
}

export default CustomerLogin;