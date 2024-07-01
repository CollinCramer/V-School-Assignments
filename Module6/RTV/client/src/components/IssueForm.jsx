import React, { useState } from 'react'


export default function IssueForm(props){
  
  const initInputs = {
    title: props.initTitle || "",
    description: props.initDescription || ""
  }

  const [inputs, setInputs] = useState(initInputs)

  const {submit, btnText, issueId, initTitle, initDescription} = props

  // onChange function for the form
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  // function fires when it is submitted
  function handleSubmit(e){
    submit(inputs, issueId)
    setInputs(initInputs)
  }


  const { title, description } = inputs
  return (
    <form className = "form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
      <button className = "button">{btnText}</button>
    </form>
  )
}