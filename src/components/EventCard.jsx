import React from 'react';

const EventCard = ({ event, onSelect, isSelected }) => {
  return (
    <div
      className={`border p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
        isSelected ? 'bg-blue-100 border-blue-500' : 'bg-white'
      }`}
      onClick={() => onSelect(event)} // Trigger event selection
    >
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.description}</p>
      <p className="text-gray-400">{event.date}</p>
      <p className="text-blue-500">{event.category}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={(e) => {
          e.stopPropagation(); // Prevent card selection when clicking RSVP button
          // Implement RSVP functionality here
        }}
      >
        RSVP
      </button>
    </div>
  );
};

export default EventCard;
