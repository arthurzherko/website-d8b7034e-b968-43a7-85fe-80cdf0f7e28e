import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Equipment from './pages/Equipment';
import Booking from './pages/Booking';

const Routes = () => (
  <RouterRoutes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/prices" element={<Pricing />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/booking" element={<Booking />} />
    </Route>
  </RouterRoutes>
);

export default Routes;
