import { useState, useContext } from 'react'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from "./context/UserProvider"
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  const { token, logout } = useContext(UserContext)
  return (
    <>
      {token && <Navbar logout={logout} />}

      <Routes >

        <Route
          path="/"
          element={token ? <Navigate to="/profile" /> : <Auth />}
        />

        {/* protected routes. IF they don't have a token in local storage itll redirect to the / page */}
        <Route
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Profile />
          </ProtectedRoute>}
        />



        <Route
          path="/public"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Public />
          </ProtectedRoute>}
        />


      </Routes>


    </>
  )
}

export default App
