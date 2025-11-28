export const calculateWeeksLived = (birthdate) => {
  if (!birthdate) return 0;
  const birth = new Date(birthdate);
  const today = new Date();
  const diffTime = Math.abs(today - birth);
  const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
  return diffWeeks;
};

export const getWeekDate = (birthdate, weekIndex) => {
  const birth = new Date(birthdate);
  const weekDate = new Date(birth);
  weekDate.setDate(birth.getDate() + weekIndex * 7);
  return weekDate;
};

export const weeksToYears = (weeks) => {
  return (weeks / 52).toFixed(1);
};

export const getWeeksToShow = (totalWeeks, viewPeriod) => {
  switch (viewPeriod) {
    case '1year':
      return Math.min(52, totalWeeks);
    case '5years':
      return Math.min(260, totalWeeks);
    case '10years':
      return Math.min(520, totalWeeks);
    default:
      return totalWeeks;
  }
};
