const EventsList = ({ events }) => {
  if (events.length === 0) return null;

  const sortedEvents = [...events].sort((a, b) => b.week - a.week);

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 mt-6'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>Your Life Events</h2>
      <div className='space-y-2'>
        {sortedEvents.slice(0, 10).map((event, idx) => (
          <div
            key={idx}
            className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'
          >
            <div
              className='w-4 h-4 rounded'
              style={{ backgroundColor: event.color }}
            ></div>
            <div className='flex-1'>
              <p className='font-medium text-gray-800'>{event.title}</p>
              <p className='text-sm text-gray-500'>{event.date}</p>
            </div>
          </div>
        ))}
      </div>
      {events.length > 10 && (
        <p className='text-sm text-gray-500 mt-4 text-center'>
          Showing 10 most recent events of {events.length} total
        </p>
      )}
    </div>
  );
};

export default EventsList;
