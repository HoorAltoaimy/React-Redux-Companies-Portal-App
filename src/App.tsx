import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Companies from './components/Companies'
import Home from './components/Home'
import Error from './components/Error'
import Navbar from './components/Navbar'
import SingleCompany from './components/SingleCompany'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:idNumber" element={<SingleCompany />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
