import React, {useState} from 'react'
import '../App.css'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link, useHistory,
} from 'react-router-dom'




function SignUpComponent (){
    
    const routeHistory = useHistory()

    const [ fullName, setFullName] = useState('')

    const [ email,setEmail] = useState('')

    const [ password, setPassword] = useState('')

    const [ confirmPassword, setConfirmPassword] = useState('')

    
    const handleFullNameChange = (e) => {
        setFullName( e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        if (fullName ==="" || email ==="" || password ==="" || confirmPassword ===""){
            alert("Sign up unsuccessfully")
            return
        }

        if (password !== confirmPassword){
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
                        <input type="text" className="form-control" placeholder="Full Name" required="required" value={fullName} onChange={handleFullNameChange}/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="required" value={email} onChange={handleEmailChange} />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required" value={password} onChange={handlePasswordChange}/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Confirm Password" required="required" value={confirmPassword} onChange={handleConfirmPasswordChange} />
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