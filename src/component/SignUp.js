import React, {useState} from 'react'
import '../App.css'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link, useHistory,
} from 'react-router-dom'




function SignUpComponent (){
    
    const routeHistory = useHistory()

    const [ fullNameState, setFullNameState] = useState({
        fullName:"",
    })

    const [ emailState,setEmailState] = useState({
        email:"",
    })

    const [ passwordState, setPasswordState] = useState({
        password:"",
    })

    const [ confirmPasswordState, setConfirmPasswordState] = useState({
        confirmPassword:"",
    })

    
    function handleFullNameChange (e){
        setFullNameState({
            fullName: e.target.value
        })
    }

    function handleEmailChange (e){
        setEmailState({
            email:e.target.value
        })
    }

    function handlePasswordChange (e){
        setPasswordState({
            password:e.target.value
        })
    }

    function handleConfirmPaaswordChange (e){
        setConfirmPasswordState({
            confirmPassword:e.target.value
        })
    }

    function handleSignUp (e){
        e.preventDefault();
        if (fullNameState.fullName ==="" || emailState.email ==="" || passwordState.password ==="" || confirmPasswordState.confirmPassword ===""){
            alert("Sign up unsuccessfully")
            return
        }

        if (passwordState.password !== confirmPasswordState.confirmPassword){
            alert("Password doesn't match")
            return
        }

        routeHistory.push('/dashboard')

    }


    return(
        <div className="login-wrapper">
            <div className="login-form">
            <form>
                <h2 className="text-center">Sign up</h2>       
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" required="required" value={fullNameState.fullName} onChange={handleFullNameChange}/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="required" value={emailState.email} onChange={handleEmailChange} />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required" value={passwordState.password} onChange={handlePasswordChange}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password" required="required" value={confirmPasswordState.password} onChange={handleConfirmPaaswordChange} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block" onClick={handleSignUp}>Sign Up</button>
                    </div>    
            </form>
    
                    <p className="text-center">Already have an account?<Link to='/login'>Log In</Link></p>

        </div>
        </div>
    )
}


export default SignUpComponent;