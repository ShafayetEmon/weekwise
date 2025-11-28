import { Calendar } from 'lucide-react';

const SetupScreen = ({ birthdate, onBirthdateChange, onComplete }) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-xl p-8 max-w-md w-full'>
        <div className='flex items-center justify-center mb-6'>
          <Calendar className='w-12 h-12 text-indigo-600' />
        </div>
        <h1 className='text-3xl font-bold text-gray-800 text-center mb-2'>
          Life Calendar
        </h1>
        <p className='text-gray-600 text-center mb-8'>
          Visualize your life in weeks and mark meaningful moments
        </p>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Your Birthdate
          </label>
          <input
            type='date'
            value={birthdate}
            onChange={(e) => onBirthdateChange(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
          />

          <button
            onClick={onComplete}
            disabled={!birthdate}
            className='w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed'
          >
            Start Visualizing
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupScreen;
