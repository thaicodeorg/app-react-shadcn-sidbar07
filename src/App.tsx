
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Users from './pages/Users'
import NoMatch from './pages/NoMatch'
import LoginPage from './pages/LoginPage'

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
