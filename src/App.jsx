import { useState } from 'react'
import './App.css'
import SplashScreen from './components/UI/SplashScreen'
import Mantenimiento from './components/UI/Mantenimiento'
import AppRoutes from './routes/AppRoutes';

function App() {
  const MANTENIMIENTO_MODE = true;
  const [loading, setLoading] = useState(() => {
    const hasShownSplash = sessionStorage.getItem('hasShownSplash') === 'true';

    if (!hasShownSplash) {
      sessionStorage.setItem('hasShownSplash', 'true');
      return true;
    }

    return false;
  });

  if (loading) return <SplashScreen onFinish={() => setLoading(false)} />;

  if (MANTENIMIENTO_MODE) return <Mantenimiento />;
  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
