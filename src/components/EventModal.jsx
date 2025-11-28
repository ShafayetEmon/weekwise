import { useState, useEffect } from 'react';
import { X, Trash2 } from 'lucide-react';
import { getWeekDate } from '../utils/dateUtils';

const EventModal = ({
  birthdate,
  selectedWeek,
  existingEvent,
  onSave,
  onDelete,
  onClose,
}) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#3b82f6');

  const MAX_TITLE_LENGTH = 100;

  const colors = [
    '#3b82f6',
    '#ef4444',
    '#10b981',
    '#f59e0b',
    '#8b5cf6',
    '#ec4899',
    '#06b6d4',
    '#441752',
  ];

  useEffect(() => {
    if (existingEvent) {
      setTitle(existingEvent.title);
      setColor(existingEvent.color);
    } else {
      setTitle('');
      setColor('#3b82f6');
    }
  }, [existingEvent]);

  const handleSave = () => {
    if (title.trim()) {
      onSave(selectedWeek, title.trim(), color);
      onClose();
    }
  };

  const handleDelete = () => {
    onDelete(selectedWeek);
    onClose();
  };

  const handleTitleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_TITLE_LENGTH) {
      setTitle(newValue);
    }
  };

  const remainingChars = MAX_TITLE_LENGTH - title.length;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className='bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-xl font-bold text-gray-800'>
            {existingEvent ? 'Edit Event' : 'Add Event'}
          </h3>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600'
          >
            <X className='w-6 h-6' />
          </button>
        </div>

        <p className='text-sm text-gray-600 mb-4'>
          Week starting:{' '}
          {getWeekDate(birthdate, selectedWeek).toLocaleDateString()}
        </p>

        <div className='space-y-4'>
          <div>
            <div className='flex items-center justify-between mb-2'>
              <label className='block text-sm font-medium text-gray-700'>
                Event Title
              </label>
              <span
                className={`text-xs ${
                  remainingChars < 10 ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                {remainingChars} characters left
              </span>
            </div>
            <input
              type='text'
              value={title}
              onChange={handleTitleChange}
              placeholder='e.g., Started new job, Traveled to Paris'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              maxLength={MAX_TITLE_LENGTH}
            />
            {title.length >= MAX_TITLE_LENGTH && (
              <p className='text-xs text-red-500 mt-1'>
                Maximum character limit reached
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Color
            </label>
            <div className='flex gap-2'>
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-full h-12 rounded-lg transition-transform ${
                    color === c
                      ? 'ring-2 ring-offset-2 ring-gray-400 scale-105'
                      : ''
                  }`}
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>
          </div>

          <div className='flex gap-3 pt-4'>
            {existingEvent && (
              <button
                onClick={handleDelete}
                className='flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors'
              >
                <Trash2 className='w-4 h-4' />
                Delete
              </button>
            )}
            <button
              onClick={handleSave}
              disabled={!title.trim()}
              className='flex-1 bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed'
            >
              Save Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
