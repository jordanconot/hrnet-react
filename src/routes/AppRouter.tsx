import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Employees from '../pages/Employees';
import Home from '../pages/Home';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='employees-list' element={<Employees />} />
      </Routes>
    </Router>
  )
}
