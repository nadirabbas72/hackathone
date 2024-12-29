import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventDashboard = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Tech Conference 2024',
      description: 'A conference for tech enthusiasts.',
      date: '2024-01-15',
      category: 'Tech',
    },
    {
      id: 2,
      title: 'Music Festival 2024',
      description: 'A festival for music lovers.',
      date: '2024-02-20',
      category: 'Music',
    },
    {
      id: 3,
      title: 'Sports Championship 2024',
      description: 'A sports event featuring the best athletes.',
      date: '2024-03-05',
      category: 'Sports',
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  useEffect(() => {
    // Fetch real event data from backend
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="p-6 flex-grow">
        <h2 className="text-3xl font-bold mb-6">Event Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={handleEventSelect}
              isSelected={selectedEvent?.id === event.id}
            />
          ))}
        </div>

        {/* Selected Event Details */}
        {selectedEvent && (
          <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{selectedEvent.title}</h3>
            <p className="text-lg text-gray-700">{selectedEvent.description}</p>
            <p className="mt-2 text-sm text-gray-500">Date: {selectedEvent.date}</p>
            <p className="mt-1 text-sm text-gray-500">Category: {selectedEvent.category}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventDashboard;
