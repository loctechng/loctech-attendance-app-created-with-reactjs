import {useState} from 'react'
import Navbar from './Navbar'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [visibility, setVisibility] = useState(false)
    const [togglePassword, setTogglePassword] = useState('password')

    return (
       <>
            <Navbar />
            Register
       </>
     );
}
 
export default Register;