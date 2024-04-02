import React, { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    birthPlace:"",
    phone:"",
    favoriteFood:"",
    bio:"",
  })
  const [nameBadges, setNameBadges] = React.useState([])

  function handleChange(event) {
    const {name,value} = event.target
    console.log(name)
    setFormData(prevFormData => {
      var newValue = value
      if (name === "phone" && !isPhoneValid(value)) {
        newValue=prevFormData.phone
      }
      return {
        ...prevFormData,
        [name]: newValue
      }
    })
  }
  function handleClick() {
    // check what is currently typed in the input boxes
    const currentValue=formData
    // submit all currently typed data to the state array
    const newNameBadge =[...nameBadges]
    newNameBadge.push(currentValue)
    setNameBadges(newNameBadge)
    // clear input fields only if there is a current value for eveything in formdata
    const clearFormData={...formData}
    clearFormData.firstName=""
    clearFormData.lastName=""
    clearFormData.email=""
    clearFormData.birthPlace=""
    clearFormData.phone=""
    clearFormData.favoriteFood=""
    clearFormData.bio=""
    setFormData(clearFormData)
  }
  const isDisabled= formData.bio === "" || formData.phone === "" || formData.firstName === "" || formData.lastName === "" || formData.email === "" || formData.birthPlace === "" || formData.favoriteFood === ""

  function isPhoneValid (phoneNumber) {
    if (isNaN(phoneNumber) === true)
    return false
    else return true
  }

  return (
    <>
      <div className='nameBadge--form'>
        <input
          placeholder='First Name'
          className='form--input'
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
          minLength={3}
        >
        </input>
        <input
          placeholder='Last Name'
          className='form--input'
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
          minLength={3}
        >
        </input>
        <input
          type="email"
          placeholder='email'
          className='form--input'
          name='email'
          onChange={handleChange}
          value={formData.email}
          min={3}
        >
        </input>
        <input
          placeholder='Place of Birth'
          className='form--input'
          name='birthPlace'
          onChange={handleChange}
          value={formData.birthPlace}
          minLength={3}
        >
        </input>
        <input
          type="tel"
          placeholder='Phone'
          className='form--input'
          name='phone'
          onChange={handleChange}
          value={formData.phone}
          minLength={3}
        >
        </input>
        <input
          placeholder='Favorite Food'
          className='form--input'
          name='favoriteFood'
          onChange={handleChange}
          value={formData.favoriteFood}
          minLength={3}
        >
        </input>
        <textarea 
          value={formData.bio}
          placeholder='bio'
          onChange={handleChange}
          name='bio'
          className='form--textarea'
        />
        <button type='button'
        onClick={handleClick}
        disabled={isDisabled}
        
        >Submit</button>
      </div>
      <ol>
        {nameBadges.map((element) => {
          return (
            <div className='nameBadge--form'>
              <h1>{element.firstName}</h1>
              <h3>Name: {element.firstName} {element.lastName}</h3>
              <h3>Phone: {element.phone}</h3>
              <h3>Place of Birth: {element.birthPlace}</h3>
              <h3>Favorite Food: {element.favoriteFood}</h3>
              <h3>Email: {element.email}</h3>
                <div className="text--box">
                  <h3>Comments: {element.bio}</h3>
                </div>
            </div>
          )
        })}
      </ol>
    </>
  )
}

export default App
