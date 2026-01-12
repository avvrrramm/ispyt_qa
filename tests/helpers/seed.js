// tests/helpers/seed.js
import fs from 'fs';
import { openDB } from 'idb';

export async function seedDatabase() {
  const rawData = fs.readFileSync('tests/seed-data.json', 'utf-8');
  const seedData = JSON.parse(rawData);

  const db = await openDB('TeacherApp', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('courses')) {
        db.createObjectStore('courses', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('events')) {
        db.createObjectStore('events', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('materials')) {
        db.createObjectStore('materials', { keyPath: 'id' });
      }
    }
  });

  const tx1 = db.transaction('courses', 'readwrite');
  for (const course of seedData.courses) {
    await tx1.store.add(course);
  }
  await tx1.done;

  const tx2 = db.transaction('events', 'readwrite');
  for (const event of seedData.events) {
    await tx2.store.add(event);
  }
  await tx2.done;

  console.log('✅ Seed дані завантажено');
}
