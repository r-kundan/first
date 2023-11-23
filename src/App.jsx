import { useState } from 'react'
import './App.css'


function App() {
  const [color, setcolor] = useState('olive')
  const [counter, setcounter] = useState(0)
console.log(color)
const add = ()=> {
  setcounter (counter+1)
}
const remove = ()=>{
  if(counter>0) setcounter(counter - 1)
}
  return (<>
  <div  style={{ backgroundColor: color }}>
      <h2 className='p-4 text-4xl text-cyan-300'>color name or color code : {color}</h2>
    <div id='bg' style={{ backgroundColor: color }}>
      <div id='main'>
        <button onClick={() => setcolor('#2C041C')} style={{ backgroundColor: "#2C041C", color: "white" }}>wine</button>
        <button onClick={() => setcolor('#E39FF6')} style={{ backgroundColor: "#E39FF6" }}>lavender</button>
        <button onClick={() => setcolor('#900603')} style={{ backgroundColor: "#900603", color: "white" }}>rubby</button>
        <button onClick={() => setcolor('#466D1D')} style={{ backgroundColor: "#466D1D" }}>mose</button>
        <button onClick={() => setcolor('orange')} style={{ backgroundColor: "orange" }}>orange</button>
        <button onClick={() => setcolor('yellow')} style={{ backgroundColor: "yellow" }}>yellow</button>
        <button onClick={() => setcolor('purple')} style={{ backgroundColor: "purple", color: "white" }}>purple</button>
        <button onClick={() => setcolor('black')} style={{ backgroundColor: "black", color: "white" }}>black</button>
        <button onClick={() => setcolor('coral')} style={{ backgroundColor: "coral" }}>coral</button>
        <button onClick={() => setcolor('white')} style={{ backgroundColor: "white" }}>white</button>
        <button onClick={() => setcolor('indigo')} style={{ backgroundColor: "indigo", color: "white" }}>indigo</button>
      </div>

      <div id= 'countdiv'>
        <h1 id='countheading'>counter</h1>
       <h2 id='totalcount'> Total count : <span>{counter}</span></h2>
        <button id='add' onClick={add}>Add Value</button>
        <button id='remove' onClick={remove}>Remove Value</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
