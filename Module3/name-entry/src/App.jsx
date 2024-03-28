import React from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = React.useState({
    inputContents:""
  })
  const [submissions, setSubmissions]= React.useState([])

  function handleChange(event) {
    const {name,value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }
  function handleClick() {
    // check what is currently typed in the input box
    const currentValue=formData.inputContents
    // submit that to be displayed on the ordered list
    const newSubmissions=[...submissions]
    newSubmissions.push(currentValue)
    setSubmissions(newSubmissions)
    // clear input box
    const clearFormData={...formData}
    clearFormData.inputContents=""
    setFormData(clearFormData)
  }

  return (
    <div>
      <form>
        <input
          type="inputContents"
          placeholder='Add Item'
          className="form--input"
          name="inputContents"
          onChange={handleChange}
          value={formData.inputContents}
        />
        <h1>{formData.inputContents}</h1>
        <button 
        type='button'
        onClick={handleClick}
        >Submit
        
        </button>
        <ol>
         {submissions.map((element) => {
          return (
            <li>{element}</li>
          )
         })}
        </ol>
      </form>
    </div>
  )
}

export default App
