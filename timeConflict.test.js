// timeConflict.test.js
import { checkTimeConflict } from './src/utils/timeConflict.js';

describe('Перевірка конфлікту часу (R1.3)', () => {
  const events = [
    { date: '20.12.2025', time: '09:00', duration: 60 } // 09:00–10:00
  ];

  test('TC2.2: є конфлікт 09:30–10:30', () => {
    const conflict = checkTimeConflict(events, '20.12.2025', '09:30', 60);
    expect(conflict).toBe(true);
  });

  test('TC2.1: немає конфлікту 11:00–12:00', () => {
    const conflict = checkTimeConflict(events, '20.12.2025', '11:00', 60);
    expect(conflict).toBe(false);
  });
});
