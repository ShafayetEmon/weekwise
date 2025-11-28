import { getWeekDate } from '../utils/dateUtils';

const CalendarGrid = ({
  birthdate,
  weeksLived,
  weeksToShow,
  viewPeriod,
  getEventForWeek,
  onWeekClick,
  hoveredWeek,
  setHoveredWeek,
}) => {
  const getWeekColor = (weekIndex) => {
    const event = getEventForWeek(weekIndex);
    if (event) return event.color;

    if (weekIndex === weeksLived - 1) return '#10b981';
    return '#cbd5e1';
  };

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <div className='mb-4 flex items-center gap-4 text-sm text-gray-600 flex-wrap'>
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 bg-slate-300 rounded'></div>
          <span>Past weeks</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 bg-green-500 rounded'></div>
          <span>Current week</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-4 h-4 bg-blue-500 rounded'></div>
          <span>With events</span>
        </div>
      </div>

      <div
        className='grid gap-1'
        style={{ gridTemplateColumns: 'repeat(52, minmax(0, 1fr))' }}
      >
        {Array.from({ length: weeksToShow }, (_, i) => {
          const weekIndex =
            viewPeriod === 'all' ? i : weeksLived - weeksToShow + i;
          const event = getEventForWeek(weekIndex);

          return (
            <div
              key={i}
              onClick={() => onWeekClick(weekIndex)}
              onMouseEnter={() => setHoveredWeek(weekIndex)}
              onMouseLeave={() => setHoveredWeek(null)}
              className='aspect-square rounded-sm cursor-pointer transition-transform hover:scale-125 hover:z-10 relative'
              style={{ backgroundColor: getWeekColor(weekIndex) }}
              title={event ? event.title : `Week ${weekIndex + 1}`}
            >
              {hoveredWeek === weekIndex && (
                <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-20'>
                  {event
                    ? event.title
                    : getWeekDate(birthdate, weekIndex).toLocaleDateString()}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className='text-xs text-gray-500 mt-4 text-center'>
        Click on any week to add or view an event
      </p>
    </div>
  );
};

export default CalendarGrid;
