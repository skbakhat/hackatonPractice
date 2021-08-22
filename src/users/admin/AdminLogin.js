import './AdminLoginStyle.css'



function AdminLogin(){

    return(
        <>
       <div className="btnDiv">
       <button id="loginBttn"> Admin Login</button><br/>
       </div>
        <div className="MainLogin">
        
        <lable>Username or email address</lable><br/>
        <input type="text"></input><br />
        <lable>Password</lable><br />
        <input type="password"></input><br/>
        <div className="loginEnd">
            <button id="EndBtn">Login</button>
            
            <p style={{color:"red",justifyContent:"right"}}>If you are a Admin then you can login from here</p>
        </div>
        </div>
        </>
    )
}

export default AdminLogin;
