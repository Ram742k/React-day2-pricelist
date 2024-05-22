import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/Ram742k" target="_blank">
          <img  src="https://avatars.githubusercontent.com/u/155966298?v=4" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ramkumar Sundaram</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button> */}
        <h2>
          This is my First React App. <br />
          I'm using Vite to build this app. <br />
          I'm using React to build this app. <br />
          
        </h2>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
