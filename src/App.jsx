import './App.css'
import FormInput from './Components/FormInput'
import React, { useState } from 'react'

export default function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    errorMessage: "",
  })

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "User Name",
      errorMessage: "User name should be 3-16 Character and shouldn't include any special character !",
      label: "User Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address !",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      type: "date",
      name: "birthday",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      type: "password",
      name: "password",
      placeholder: "Password",
      errorMessage: "It should 8-20 character and include special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      type: "password",
      name: "confirmpassword",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ]

  // const userNameRef = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))


  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  // console.log(values)
  return (
    <div className='App' >
      <form onSubmit={handleSubmit} >
        <h1>Register</h1>
        {inputs.map((input) => (

          <FormInput key={input.id} {...input} value={values[input.name]}
            onChange={onChange}
          />
        ))}



        <button>Submit</button>
      </form>
    </div>
  )
}
