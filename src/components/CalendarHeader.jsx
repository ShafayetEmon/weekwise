import { Eye } from 'lucide-react';
import { weeksToYears } from '../utils/dateUtils';

const CalendarHeader = ({
  weeksLived,
  viewPeriod,
  onViewPeriodChange,
  onReset,
}) => {
  const yearsLived = weeksToYears(weeksLived);

  const ViewButton = ({ period, label, isActive }) => (
    <button
      onClick={() => onViewPeriodChange(period)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
      <div className='flex items-center justify-between mb-4'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>
            Your Life in Weeks
          </h1>
          <p className='text-gray-600'>
            You've lived{' '}
            <span className='font-bold text-indigo-600'>
              {weeksLived} weeks
            </span>{' '}
            ({yearsLived} years)
          </p>
        </div>
        <button
          onClick={onReset}
          className='text-red-600 hover:text-red-700 text-sm underline'
        >
          Reset Data
        </button>
      </div>

      <div className='flex items-center gap-2 flex-wrap'>
        <Eye className='w-4 h-4 text-gray-500' />
        <span className='text-sm text-gray-600 mr-2'>Show:</span>
        <ViewButton
          period='all'
          label='Entire Life'
          isActive={viewPeriod === 'all'}
        />
        <ViewButton
          period='10years'
          label='Last 10 Years'
          isActive={viewPeriod === '10years'}
        />
        <ViewButton
          period='5years'
          label='Last 5 Years'
          isActive={viewPeriod === '5years'}
        />
        <ViewButton
          period='1year'
          label='Last Year'
          isActive={viewPeriod === '1year'}
        />
      </div>
    </div>
  );
};

export default CalendarHeader;
