import React, { useState } from "react";
import axios from "axios";
import Ugly from "./Ugly";

const AppContext = React.createContext()

function AppContextProvider(props) {

    // create State for info from API
    const [uglyThings, setUglyThings] = useState([{
        title: "",
        description: "",
        imgUrl: "",
        _id: "",
    }])

    // create State for Form Data
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imgUrl: "",
        // no id property because it is done automatically on submission to the API
    })

    // Get data from API and submit to my uglyThings State
    // useEffect hook to make this run on every render/ update
    React.useEffect(() => {
        axios.get("https://api.vschool.io/collincramer/thing")
            .then(response => {
                setUglyThings(response.data.map(ugly => {
                    return {
                        // return the values for every object in the ugly array
                        title: ugly.title,
                        description: ugly.description,
                        imgUrl: ugly.imgUrl,
                        _id: ugly._id
                    }

                }
                )
            )})
    // dependency array. If it's empty the useEffect will only occur once on render. Prevents infinite loop
    }, [])
    console.log(uglyThings)
    // console log works. uglyThings looks like this
    // (3) [{…}, {…}, {…}]

    // ugly is undefined, so I am trying to get it rendered on the page by setting it as a variable and mapping over my ugly state here
    const ugly = (uglyThings.map(uglyItem => {
        return <Ugly 
        title={uglyItem.title}
        description={uglyItem.description}
        imgUrl={uglyItem.imgUrl}
        _id={uglyItem._id}
        
        />
    }))

    // handle change for updating state for my FormData

    function handleChange(event) {
        const { name,value } = event.target
        setFormData(prevFormData => {
            return {
            ...prevFormData,
               [name]:value
            }
        })
        console.log(formData)
        
    }
    // declaring variables here to pass to be able to declare context
    const title = formData.title
    const description= formData.description
    const imgUrl = formData.imgUrl

    // handleSubmit to add new objects to the array on the API

    function handleSubmit(event) {
        // stops the whole page from rerendering on submit, which is the default behavior
        // event.preventDefault()
        axios.post("https://api.vschool.io/collincramer/thing", formData)
            .catch(err => console.log(err))

        // will clear the form inputs upon submission
        setFormData({
            title:"",
            description:"",
            imgUrl:"",
        })

    }



    return (

        <AppContext.Provider value={{
            // props to be passed down to children elements
            ugly,
            handleChange,
            title,
            description,
            imgUrl,
            handleSubmit,
        }}>
            {props.children}
        </AppContext.Provider>

    )
}

export {AppContext, AppContextProvider}


// quick links for ugly things to add
// Philly Phanatic
// https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Phillie_Phanatic.jpg/490px-Phillie_Phanatic.jpg\
// Mr.Mime
// https://cdn.vox-cdn.com/thumbor/Ufd0vAQHuuy9TPxep6l39g2DiEY=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/13430817/Screen_Shot_2018_11_12_at_12.33.23_PM.png
// Jabba
// https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg?region=0%2C0%2C1200%2C675
