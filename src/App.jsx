import { useState } from 'react'
import './App.css'
import SignupForm from './Asign1/SignupForm.jsx'
import Increment from './Assign2/increment.jsx'
import Calculator from './Assign3/Calculator.jsx'




function App() {

  return (
    <> 
      <div className="bg-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <SignupForm />
      <Increment />

      <Calculator />
    </div>
    </>
  )
}

export default App
