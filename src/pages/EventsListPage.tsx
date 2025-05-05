
import React from 'react';
import { useEvents } from '@/contexts/EventContext';
import EventFilters from '@/components/EventFilters';
import EventCard from '@/components/EventCard';
import { Skeleton } from '@/components/ui/skeleton';

const EventsListPage: React.FC = () => {
  const { filteredEvents, loading } = useEvents();

  // Create skeleton loaders for the loading state
  const SkeletonEventCard = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <Skeleton className="h-48 w-full" />
      <div className="p-5">
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-16 w-full mb-3" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          College Tech Events
        </h1>
        <p className="text-lg text-gray-600">
          Discover hackathons, workshops, tech talks, and more at colleges across the country
        </p>
      </div>

      <EventFilters />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <SkeletonEventCard key={index} />
          ))}
        </div>
      ) : filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-medium text-gray-700 mb-2">No events found</h3>
          <p className="text-gray-500">
            Try adjusting your filters or submit a new event
          </p>
        </div>
      )}
    </div>
  );
};

export default EventsListPage;
