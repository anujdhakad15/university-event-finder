
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Event, EventType, mockEvents } from '../data/mockEvents';
import { toast } from '@/components/ui/use-toast';

interface EventContextProps {
  events: Event[];
  filteredEvents: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  eventTypeFilter: EventType | 'all';
  setEventTypeFilter: (filter: EventType | 'all') => void;
  collegeFilter: string | 'all';
  setCollegeFilter: (filter: string | 'all') => void;
  dateFilter: 'all' | 'today' | 'this-week' | 'this-month';
  setDateFilter: (filter: 'all' | 'today' | 'this-week' | 'this-month') => void;
  loading: boolean;
}

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const useEvents = (): EventContextProps => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [eventTypeFilter, setEventTypeFilter] = useState<EventType | 'all'>('all');
  const [collegeFilter, setCollegeFilter] = useState<string | 'all'>('all');
  const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'this-week' | 'this-month'>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  // Load initial mock data
  useEffect(() => {
    // Simulate API call with a delay
    const timer = setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Apply filters whenever relevant state changes
  useEffect(() => {
    let filtered = [...events];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        event =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by event type
    if (eventTypeFilter !== 'all') {
      filtered = filtered.filter(event => event.eventType === eventTypeFilter);
    }

    // Filter by college
    if (collegeFilter !== 'all') {
      filtered = filtered.filter(event => event.college === collegeFilter);
    }

    // Filter by date
    if (dateFilter !== 'all') {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const oneWeekLater = new Date(today);
      oneWeekLater.setDate(oneWeekLater.getDate() + 7);
      const oneMonthLater = new Date(today);
      oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        
        switch (dateFilter) {
          case 'today':
            return eventDate >= today && eventDate < new Date(today.getTime() + 24 * 60 * 60 * 1000);
          case 'this-week':
            return eventDate >= today && eventDate < oneWeekLater;
          case 'this-month':
            return eventDate >= today && eventDate < oneMonthLater;
          default:
            return true;
        }
      });
    }

    // Sort by date (closest first)
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    setFilteredEvents(filtered);
  }, [events, searchTerm, eventTypeFilter, collegeFilter, dateFilter]);

  // Add a new event
  const addEvent = (event: Omit<Event, 'id'>) => {
    const newEvent = {
      ...event,
      id: Date.now().toString(),
    };
    setEvents(prevEvents => [...prevEvents, newEvent]);
    toast({
      title: "Success!",
      description: "Event added successfully",
    });
  };

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        addEvent,
        searchTerm,
        setSearchTerm,
        eventTypeFilter,
        setEventTypeFilter,
        collegeFilter,
        setCollegeFilter,
        dateFilter,
        setDateFilter,
        loading
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
