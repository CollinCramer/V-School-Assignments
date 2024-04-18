import React from 'react'
import './App.css'
import Header from './Header'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [gradient, setGradient] = React.useState({
    color1:"#000000",
    color2:"#000000",
    color3:"#000000",
    angle:"",
    colorInfo:"",
    id:"",
  })
  const [gradientList, setGradientList] = React.useState([])

  uuidv4();

  function handleChange(event) {
    const {name, value} = event.target
    setGradient(prevGradient => {
        const newGradient = {...prevGradient,
        [name]: value}
        const colorInfo = generateCSS(newGradient)
        return {
          ...newGradient,
          colorInfo
        }
    })
  
    
  }

  function generateCSS(gradient) {
    
    return `background: linear-gradient(${gradient.angle}deg,${gradient.color1},${gradient.color2}); 
    -moz-background: linear-gradient(${gradient.angle}deg,${gradient.color1},${gradient.color2}); 
    -webkit: linear-gradient(${gradient.angle}deg,${gradient.color1},${gradient.color2});`
  }
  console.log(gradient)
  function submitGradient() {
    const toBeSubmitted=gradient

    const submittedValue=[...gradientList]

    submittedValue.push({...toBeSubmitted, id: uuidv4()})

    setGradientList(submittedValue)

   
  }

  console.log(gradientList)

  // cannot get the delete to work for a single item. Temporarily I have swapped the "true" and "false" so it works to delete all items in the gradientList state
  function deleteGradient(id) {
    
    const editGradientList = gradientList.filter((grad) => {
        
        
        if (grad.id === id) {
            return false
        }
        return true
       
    })
    setGradientList(editGradientList)
    console.log(gradientList)

  }
  console.log(gradientList)


  
  return (
    <>
      <Header />
      <Form>
          <div className='form--inputs'>
            <div className='options'>
              <h2>Options:</h2>
              <div>
                <h3>Color 1</h3>
                <h3>Show Current Selected Value</h3>
                <input name="color1" 
                placeholder='color 1'
                type='color'
                onChange={handleChange}
                ></input>
              </div>
              <div>
                <h3>Color 2</h3>
                <h3>Show Current Selected Value</h3>
                <input name="color2"
                type='color'
                placeholder='color 2' 
                onChange={handleChange}
                ></input>
              </div>
              <div>
                <h3>Angle</h3>
                <input type='number' name="angle" onChange={handleChange}></input>
                <button type='button' onClick={submitGradient}>Save Gradient</button>
              </div>
            </div>
          </div>
      </Form>
      <Form>
        <>
          <div className='show--gradient' style={{background:`linear-gradient(${gradient.angle}deg,${gradient.color1},${gradient.color2})`}} ></div>
          <textarea name="" id="" cols="30" rows="10" readOnly value={gradient.colorInfo}></textarea>
        </>
      </Form>
      {gradientList.map((element) => {
        return (
          <Form id={element.id}>
            <h3>{element.color1}</h3>
            <h3>{element.color2}</h3>
            <h3>{element.color3}</h3>
            <h3>{element.angle}</h3>
            <div className='saved--gradient' style={{background:`linear-gradient(${element.angle}deg,${element.color1},${element.color2})`}}></div>
            <button type='button' onClick={deleteGradient}>Delete Gradient</button>
          </Form>
        )
      })}
    </>
  )
}

export default App
