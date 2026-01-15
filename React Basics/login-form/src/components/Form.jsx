 import {useState} from 'react'
 import './Form.css'
 
 
 function Form(){
        const [showPassword, setShowPassword] = useState(true);

        function passwordToggle(){
          setShowPassword(!showPassword)
        }

        return(
            <>
                <p
                  className='form-heading'
                
                >Hello, Welcome to my website</p>

                <input 
                    type="text" 
                    placeholder="Email"
                    className='form-input'
                /> <br/>
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="password"
                    className='form-input'
                /> 

                <button
                  onClick={passwordToggle}
                >
                 {showPassword ? "Hide" : "Show"}
                
                </button>
                
                <br/>

                <button className='btn'>Login</button>
                <button className='btn'>Sign Up</button>

            </>
        )
      }  

 export default Form;     
