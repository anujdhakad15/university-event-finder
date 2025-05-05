
import React, { useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useEvents } from '@/contexts/EventContext';

const EventFilters: React.FC = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    eventTypeFilter, 
    setEventTypeFilter, 
    collegeFilter, 
    setCollegeFilter, 
    dateFilter, 
    setDateFilter,
    events
  } = useEvents();

  // Extract unique colleges from events
  const uniqueColleges = useMemo(() => {
    return Array.from(new Set(events.map(event => event.college)));
  }, [events]);

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Filter Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        
        {/* Event Type Filter */}
        <Select
          value={eventTypeFilter}
          onValueChange={(value) => setEventTypeFilter(value as any)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="hackathon">Hackathons</SelectItem>
            <SelectItem value="workshop">Workshops</SelectItem>
            <SelectItem value="tech-talk">Tech Talks</SelectItem>
            <SelectItem value="career-fair">Career Fairs</SelectItem>
            <SelectItem value="conference">Conferences</SelectItem>
          </SelectContent>
        </Select>
        
        {/* College Filter */}
        <Select
          value={collegeFilter}
          onValueChange={(value) => setCollegeFilter(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="College" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Colleges</SelectItem>
            {uniqueColleges.map((college) => (
              <SelectItem key={college} value={college}>
                {college}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {/* Date Filter */}
        <Select
          value={dateFilter}
          onValueChange={(value) => setDateFilter(value as any)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Dates</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default EventFilters;
