

function CustomerSignup(){
    return(
    <>
         <div className="btnDiv">
       <button id="loginBttn">SignUp</button><br/>
       </div>
        <div className="MainLogin">
        <lable>Resturent Name</lable><br/>
        <input type="text"></input><br />
        <lable>Username or email address</lable><br/>
        <input type="text"></input><br />
        <lable>Password</lable><br />
        <input type="password"></input><br/>
        <lable>Country</lable><br/>
        <input type="text"></input><br />
        <lable>City</lable><br/>
        <input type="text"></input><br />
        
        <div className="loginEnd">

            <button id="EndBtn">SignUp</button>
            
            
        </div>
        </div>
    </>
    )
}

export default CustomerSignup;