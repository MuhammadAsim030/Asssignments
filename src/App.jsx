import { useState } from 'react'
import './App.css'
import SignupForm from './Asign1/SignupForm.jsx'
import Calculator from './Assign3/Calculator.jsx'
import Button from './Assign2/Button.jsx'




function App() {

  return (
    <> 
      <div className="bg-gray-500">
      <SignupForm />
      <Button />
      <Calculator />
    </div>
    </>
  )
}

export default App
