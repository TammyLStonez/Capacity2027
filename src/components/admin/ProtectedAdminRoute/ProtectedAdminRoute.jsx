import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../../../context/AdminAuthContext';

export default function ProtectedAdminRoute({ children }) {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    // Don't reveal that /admin exists — just bounce to home.
    return <Navigate to="/" replace />;
  }

  return children;
}