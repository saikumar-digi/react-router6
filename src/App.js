import './App.css';
import {  Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import Vans from './pages/Vans';
import VanDetail from './pages/Vandetails';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Reviews from './pages/Reviews';
import HostLayout from './components/HostLayout';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>

  );
}

export default App;
