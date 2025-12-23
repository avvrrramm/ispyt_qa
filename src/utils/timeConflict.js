// src/utils/timeConflict.js
function toMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

export function checkTimeConflict(events, newDate, newTime, duration) {
  const newStart = toMinutes(newTime);
  const newEnd = newStart + duration;

  return events.some(event => {
    if (event.date !== newDate) return false;
    const start = toMinutes(event.time);
    const end = start + event.duration;
    return !(newEnd <= start || newStart >= end);
  });
}
