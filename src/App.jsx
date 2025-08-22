import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux'
import {store} from './store/index'
import PublicRoutes from './utils/PublicRoutes'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes/>}>
        <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoutes/>}>
        <Route path="/" element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
