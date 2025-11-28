import React, { useState } from 'react';
import SetupScreen from './components/SetupScreen';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import EventModal from './components/EventModal';
import EventsList from './components/EventsList';
import { useCalendar } from './hooks/useCalendar';

function App() {
  const [isSetup, setIsSetup] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  const {
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
  } = useCalendar();

  React.useEffect(() => {
    if (birthdate) {
      setIsSetup(true);
    }
  }, [birthdate]);

  const handleSetupComplete = () => {
    if (birthdate) {
      setIsSetup(true);
    }
  };

  const handleWeekClick = (weekIndex) => {
    setSelectedWeek(weekIndex);
    setShowEventModal(true);
  };

  const handleSaveEvent = (weekIndex, title, color) => {
    addEvent(weekIndex, title, color);
  };

  const handleReset = () => {
    const didReset = resetAllData();
    if (didReset) {
      setIsSetup(false);
    }
  };

  if (!isSetup) {
    return (
      <SetupScreen
        birthdate={birthdate}
        onBirthdateChange={setBirthdate}
        onComplete={handleSetupComplete}
      />
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        <CalendarHeader
          weeksLived={weeksLived}
          viewPeriod={viewPeriod}
          onViewPeriodChange={setViewPeriod}
          onReset={handleReset}
        />

        <CalendarGrid
          birthdate={birthdate}
          weeksLived={weeksLived}
          weeksToShow={weeksToShow}
          viewPeriod={viewPeriod}
          getEventForWeek={getEventForWeek}
          onWeekClick={handleWeekClick}
          hoveredWeek={hoveredWeek}
          setHoveredWeek={setHoveredWeek}
        />

        <EventsList events={events} />

        {showEventModal && (
          <EventModal
            birthdate={birthdate}
            selectedWeek={selectedWeek}
            existingEvent={getEventForWeek(selectedWeek)}
            onSave={handleSaveEvent}
            onDelete={deleteEvent}
            onClose={() => setShowEventModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
