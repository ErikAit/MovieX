import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
