import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/fonts.css';
import './styles/global.css';
import Hero from './pages/public/Hero/Hero';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


export default function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}
