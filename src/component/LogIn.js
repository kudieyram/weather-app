import React, {useState} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css' 
import '../index.css'
import {
    Link,
    useHistory,
} from 'react-router-dom'



function LogInComponent() {

    const routeHistory = useHistory()

    const [ emailState, setEmail] = useState({
        email: "",
    }) 

    const [ passwordState, SetPassword] = useState({
        password: "",
    })

    function handleEmailChange (e){
        setEmail({
            "email": e.target.value
        })
    }

    function handlePasswordChange (e){
        SetPassword({
            "password": e.target.value
        })
    }

    function handleLogin (e){
        e.preventDefault();
        if (emailState.email ==="" || passwordState.password ===""){
            alert("Provide valid Email & Password. Try again")
            return
        }

        routeHistory.push('/dashboard')
    }

    

    return(
        <div className='login-wrapper'>
            <div className="login-form">
            <form>
            <h2 className="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" required="required" name="email" onChange={handleEmailChange} value={emailState.email}/>
                </div>

            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required="required" name="password" onChange= {handlePasswordChange} value={passwordState.password}/>
            </div>
            
            <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={handleLogin}>Log in</button>
            </div>
    </form>
    <p className="text-center">Not Registered?<Link to ='/signup'>Create an Account</Link></p>

</div>
        </div>
    )
}

export default LogInComponent;


