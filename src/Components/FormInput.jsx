import React, { useState } from 'react'
import './formInput.css'

function FormInput(props) {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, id, onChange, ...inputProps } = props

  const handleFocused = (e) => {
    setFocused(true)
  }

  return (
    <div className='formInput'>

      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocused}
        focused={focused.toString()}
        onFocus={() => inputProps.name === "confirmpassword" && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput