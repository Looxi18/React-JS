import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './assets/components/Button/Button'
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import NavBar from './assets/components/NavBar/NavBar'

function App() {

  const[valor,setValor]= useState(0)

  console.log("Se renderiza el app")

 


  return (
    <>
      {/* <div>
        <h1>Hola</h1>
        <Button text="Comprar" color="black" />
      </div> */}
      <NavBar valor={valor} />
      <ItemListContainer mensaje="Compra albumes musicales" fn={setValor} />


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App
