// tests/helpers/cleanup.js
import { openDB } from 'idb';

export async function cleanupDatabase() {
  const db = await openDB('TeacherApp', 1);

  await db.clear('courses');
  await db.clear('events');
  await db.clear('materials');
  await db.clear('comments');

  console.log('🧹 База даних очищена');
}
