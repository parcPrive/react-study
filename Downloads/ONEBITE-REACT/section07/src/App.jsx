import './App.css'
import Viewer from './components/Viewer'
import Contoller from './components/Controller'
import { useState, useEffect, useRef } from 'react'
import Even from './components/Even'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);



  // 1. 마운트 : 최초실행
  useEffect(() => {
    console.log("mount")
  }, [])
  // 2. 업데이트 : 변화, 리랜더링
  useEffect(() => {
    if(!isMount.current) { // 이걸로 처음은 막고 다음부터는 업데이트가 된거니 나오게한다.
      isMount.current = true;
      return;
    }
    console.log("update")
  })
  // useEffect(() => {
  //   console.log(`count => ${count} / input => ${input}`)
  // }, [count, input])

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <>
    <div className='App'> 
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) => {
        setInput(e.target.value)
      }}/>
    </section>
    <section>
       <Viewer count={count}/>
       {count % 2 === 0 ? <Even/> : null}
    </section>
    <section>
      <Contoller onClickButton={onClickButton}/> 
    </section>
    </div>
     

    </>
  )
}

export default App
