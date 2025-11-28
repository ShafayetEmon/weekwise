import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { calculateWeeksLived, getWeeksToShow } from '../utils/dateUtils';

export const useCalendar = () => {
  const [birthdate, setBirthdate] = useLocalStorage('birthdate', '');
  const [events, setEvents] = useLocalStorage('lifeEvents', []);
  const [viewPeriod, setViewPeriod] = useState('all');
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [hoveredWeek, setHoveredWeek] = useState(null);

  const weeksLived = calculateWeeksLived(birthdate);
  const weeksToShow = getWeeksToShow(weeksLived, viewPeriod);

  const addEvent = (weekIndex, title, color) => {
    const newEvent = {
      week: weekIndex,
      title,
      color,
      date: new Date(birthdate).toLocaleDateString(),
    };

    const existingIndex = events.findIndex((e) => e.week === weekIndex);

    if (existingIndex >= 0) {
      const updatedEvents = [...events];
      updatedEvents[existingIndex] = newEvent;
      setEvents(updatedEvents);
    } else {
      setEvents([...events, newEvent]);
    }
  };

  const deleteEvent = (weekIndex) => {
    setEvents(events.filter((e) => e.week !== weekIndex));
  };

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all data?')) {
      localStorage.removeItem('birthdate');
      localStorage.removeItem('lifeEvents');
      setBirthdate('');
      setEvents([]);
      return true;
    }
    return false;
  };

  const getEventForWeek = (weekIndex) => {
    return events.find((e) => e.week === weekIndex);
  };

  return {
    birthdate,
    setBirthdate,
    events,
    viewPeriod,
    setViewPeriod,
    selectedWeek,
    setSelectedWeek,
    hoveredWeek,
    setHoveredWeek,
    weeksLived,
    weeksToShow,
    addEvent,
    deleteEvent,
    resetAllData,
    getEventForWeek,
  };
};
