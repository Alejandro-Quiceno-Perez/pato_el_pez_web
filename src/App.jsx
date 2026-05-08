import { useState, useEffect } from 'react'
import './App.css'
import SplashScreen from './components/UI/SplashScreen'
import AppRoutes from './routes/AppRoutes';

function App() {
  const [loading, setLoading] = useState(() => {
    const hasShownSplash = sessionStorage.getItem('hasShownSplash') === 'true';

    if (!hasShownSplash) {
      sessionStorage.setItem('hasShownSplash', 'true');
      return true;
    }

    return false;
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) return <SplashScreen />;

  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
