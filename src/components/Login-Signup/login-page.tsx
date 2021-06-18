import { useState } from 'react'
import Login from './login-form'
import Signup from './signup-form'

export default function LoginPage() {
    const [loginOrSignup, changeLoginOrSignup] = useState(true)

    const changeLoginScreen = () => changeLoginOrSignup(!loginOrSignup)

    return (
        <div>
            {loginOrSignup
                ?
            <Login/>
                :
            <Signup/>
            }
            <button onClick={changeLoginScreen}>Change</button>
        </div>
    )
}