import AppRoutes from './routes/AppRoutes';
import './styles/fonts.css';
import './styles/global.css';
import { AdminAuthProvider } from './context/AdminAuthContext';
import PinGate from './components/admin/PinGate/PinGate.jsx';

export default function App() {
  return (
    <AdminAuthProvider>
      <AppRoutes />
      <PinGate />
    </AdminAuthProvider>
  );
}