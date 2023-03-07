import React, { useRef } from 'react';
import "../../pages/SignUp.css";
import bcrypt from 'bcryptjs'

function SignUpForm() {
	const firstName = useRef()
	const lastName = useRef()
	const emailInputRef = useRef()
	const passwordInputRef = useRef()
	const traineeOrMentor = useRef()
  
    const handleSubmit = (event) => {
      event.preventDefault();
	  const email = emailInputRef.current.value
	  const password = bcrypt.hashSync(passwordInputRef.current.value, 10)
	  console.log(password)
    };  
  return (
		<div className="userDetail">
			<form onSubmit={handleSubmit} className="signUpForm">
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					ref={firstName}
					className="userInput"
					id="firstName"
					name='first-name'
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					ref={lastName}
					className="userInput"
					id="lastName"
					name='last-name'
				/>
				<label htmlFor="eamil">Email</label>
				<input
					type="email"
					ref={emailInputRef}
					className="userInput"
					id="email"
					name='email'
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					ref={passwordInputRef}
					className="userInput"
					id="password"
					name='password'
				/>

        <div className='radioBtnWrapper'>
          <div className='radioBtn'>
				<input type="radio" id="mentor" name='input' />
				<label htmlFor="mentor">Mentor</label>
          </div>

          <div className='radioBtn'>
				<input type="radio" id="trainee" name='input'/>
				<label htmlFor="trainee">Trainee</label>
          </div>

        </div>
				<button type="submit" className="signUpBtn">
					Continue
				</button>
			</form>
		</div>
	);
}

export default SignUpForm
