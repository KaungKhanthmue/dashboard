import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx'
import AuthContext from './context/AuthContext.jsx';
import { useEffect, useState } from 'react';

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem('ACCESS_TOKEN') || '');

  useEffect(() => {
    localStorage.setItem('ACCESS_TOKEN', token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export default App;
