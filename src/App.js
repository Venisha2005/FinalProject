import React, { useState, useEffect } from 'react';
import Welcome from './welcome.jsx';
import Sec from './sec.jsx';
import LoadingPage from './loading.jsx';
import Services from './services.jsx';
import Marquee from './marquee.jsx';
import About from './about.jsx';
import Circle from './circle.jsx';
import Abc from './abc.jsx';
import Linkedin from './linkedin.jsx';
import Footer from './footer.jsx';
import PasswordGate from './password.jsx';


const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset for testing - remove this in production
    localStorage.removeItem('app:guestAuthorized');
    
    // Check authorization status
    const authStatus = localStorage.getItem('app:guestAuthorized') === 'true';
    setIsAuthorized(authStatus);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div style={{ 
      height: '100vh', 
      background: '#f4f4f4', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>Loading...</div>;
  }

  if (!isAuthorized) {
    return (
      <div>
        <PasswordGate onSuccess={() => { localStorage.setItem('app:guestAuthorized', 'true'); setIsAuthorized(true); }} />
      </div>
    );
  }

  return (
    <div>
      <Welcome />
      <Sec/>
      <LoadingPage/>
      <Services/>
      <Marquee/>
      <About/>
      <Circle/>
      <Abc/>
      <Linkedin/>
      <Footer/>
       
    </div>
  );
};

export default App;
