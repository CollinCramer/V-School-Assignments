
function App() {
  const array = [1,2,3,4,5]
// 1. map through array and add 1 to every item. console.log
// 2. multiply everything by itself. console log
// 3. filter through array and only return true if its even

const evenNums = array.filter(num => 
   (num % 2 === 0)
  )

console.log(evenNums)




  return (
    <div>hello world</div>
  )
}

export default App
