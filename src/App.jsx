import { Routes, Route } from 'react-router-dom'
import { CatsContainer } from './components/CatsContainer/CatsContainer'
import { Header } from './components/Header/Header'
import './App.css'



const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<CatsContainer />} />
      </Routes>
    </div>
  )
}

export default App
