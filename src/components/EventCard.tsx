
import React from 'react';
import { Event } from '@/data/mockEvents';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'MMM d, yyyy • h:mm a');
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'bg-purple-500';
      case 'workshop':
        return 'bg-blue-500';
      case 'tech-talk':
        return 'bg-green-500';
      case 'career-fair':
        return 'bg-amber-500';
      case 'conference':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02] border border-gray-200 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image || 'https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'} 
          alt={event.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={`${getEventTypeColor(event.eventType)} text-white`}>
            {event.eventType.replace('-', ' ')}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="py-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl line-clamp-2">{event.name}</h3>
        </div>
        <p className="text-sm text-gray-500">
          {event.college}
        </p>
      </CardHeader>
      
      <CardContent className="py-2 flex-grow">
        <p className="text-gray-700 line-clamp-3 mb-4">{event.description}</p>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{formatEventDate(event.date)}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-2" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        <Button 
          className="w-full bg-event-primary hover:bg-event-accent"
          onClick={() => window.open(event.link, '_blank')}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
