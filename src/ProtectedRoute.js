import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // or use context/auth hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
    return children;
};

export default ProtectedRoute;
