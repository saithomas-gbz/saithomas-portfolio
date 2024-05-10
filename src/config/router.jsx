import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../screens/Home';
import Loader from '../screens/Loader';

const LoadingWithLocation = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loader /> : children;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LoadingWithLocation>
            <Home />
          </LoadingWithLocation>
        } />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;