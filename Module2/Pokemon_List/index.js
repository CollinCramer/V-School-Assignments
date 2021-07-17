const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

//function to receive JSON Data from API
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data["objects"][0]["pokemon"])
    }
}
function showData(arr){
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}

