
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-event-primary to-event-secondary shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 
            className="text-white text-2xl font-bold cursor-pointer" 
            onClick={() => navigate('/')}
          >
            CampusEvents
          </h1>
        </div>
        
        <nav className="flex space-x-2">
          <Button
            variant={location.pathname === '/' ? "secondary" : "ghost"}
            className="text-white hover:bg-white/20"
            onClick={() => navigate('/')}
          >
            Events
          </Button>
          <Button
            variant={location.pathname === '/submit' ? "secondary" : "ghost"}
            className="text-white hover:bg-white/20"
            onClick={() => navigate('/submit')}
          >
            Submit Event
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
