import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
  <div className="min-h-screen bg-[#0F172A] text-white">
    <Navbar />
    <main className="container mx-auto px-4 py-8">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
