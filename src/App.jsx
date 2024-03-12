import './App.css'
import Card from './components/Card'
import data from './data/data.json'
import { useState }  from 'react'

function App() {
  const [isTurn, setIsTurn] = useState(false)

  function handleTurn() {
    setIsTurn(!isTurn)
  }

  return (
    <>
    
    <span style={{
      width: '400px',
      height: '400px',
      justifyContent: 'center',
      border: '5px solid rgb(0, 119, 255)',
      transition:'all 3s',
      marginLeft: '450px',
      display: 'inline-block',
      borderRadius: '50%',
      marginBottom: '50px',
      backgroundColor: isTurn ? 'rgb(0, 119, 255)' : 'transparent'
    }}></span>
    <button className='button' onClick={handleTurn}>refresh 🔃</button>
    <div className="container">
    {
     data.map((v, i) => {
      return (
        <Card data={v} key={i}/>
      )
     })
    }
    </div>
    </>
  )
}

export default App
