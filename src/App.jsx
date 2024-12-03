import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import News from './component/News'

function App() {
  const [category, setCategory] = useState("bitcoin")



  return (
    <>
      <Navbar setCategory={setCategory} />
      <News category={category} />
    </>
  )
}

export default App
