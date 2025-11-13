import './App.css'
import Viewer from './components/Viewer'
import Contoller from './components/Controller'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <>
    <div className='App'> 
    <h1>Simple Counter</h1>
    <section>
       <Viewer count={count}/>
    </section>
    <section>
      <Contoller onClickButton={onClickButton}/> 
    </section>
    </div>
     

    </>
  )
}

export default App
