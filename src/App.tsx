import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/login'
import Mailbox from './pages/mailbox/mailbox'
import Register from './pages/auth/register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mailbox" element={<Mailbox />} />
        <Route path="/inscription" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
