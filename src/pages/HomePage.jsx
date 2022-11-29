import { useEffect } from 'react';
import { useAuth } from 'contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { isAuthenticate } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticate) {
      navigate('/todos');
    } else {
      navigate('login');
    }
  }, [navigate, isAuthenticate]);
};

export default HomePage;
