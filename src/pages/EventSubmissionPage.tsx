
import React from 'react';
import EventSubmissionForm from '@/components/EventSubmissionForm';

const EventSubmissionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Submit an Event
        </h1>
        <p className="text-lg text-gray-600">
          Share tech events happening at your college or university with the community
        </p>
      </div>
      
      <EventSubmissionForm />
    </div>
  );
};

export default EventSubmissionPage;
