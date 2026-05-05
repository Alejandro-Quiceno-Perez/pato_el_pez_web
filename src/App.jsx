import { useState, useEffect } from 'react'
import './App.css'
import SplashScreen from './components/layouts/SplashScreen'

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
      aplicacion principal
    </div>
  )
}

export default App
