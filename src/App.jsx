import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import FilmPage from './pages/FilmPage'
import LoginPage from './pages/LoginPage'
import FavoritePage from './pages/FavoritePage'
import { useEffect } from 'react'
import RegisterPage from './pages/RegisterPage'

function App() {
  const isRegister = localStorage.getItem('reg');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRegister && !isLoggedIn) {
      navigate('/reg');
    }
  }, [isRegister, navigate]);


  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/reg' element={<RegisterPage />} />
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/film' element={<FilmPage />} />
          <Route path='/fav' element={<FavoritePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
