import { useState } from 'react'
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

  if (loading) return <SplashScreen onFinish={() => setLoading(false)} />;

  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
