
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-event-primary">404</h1>
        <p className="text-2xl text-gray-700 mt-4 mb-6">Oops! Page not found</p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          className="bg-event-primary hover:bg-event-accent"
          onClick={() => navigate('/')}
        >
          Return to Events
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
