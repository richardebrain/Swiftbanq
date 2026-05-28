import { openDB, IDBPDatabase } from 'idb';
import { Guide, guidesData } from './guidesData';

const DB_NAME = 'swiftbanq-db';
const STORE_NAME = 'guides';

export async function initDB(): Promise<IDBPDatabase | undefined> {
  // Only run on the client
  if (typeof window === 'undefined') return undefined;

  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'slug' });
      }
    },
  });
}

// Save guides to IndexedDB
export async function saveGuidesToDB(guides: Guide[]) {
  const db = await initDB();
  if (!db) return;

  const tx = db.transaction(STORE_NAME, 'readwrite');
  await Promise.all([
    ...guides.map((guide) => tx.store.put(guide)),
    tx.done,
  ]);
}

// Get all guides from IndexedDB
export async function getGuidesFromDB(): Promise<Guide[]> {
  const db = await initDB();
  if (!db) return [];
  return db.getAll(STORE_NAME);
}

// Get a single guide by slug from IndexedDB
export async function getGuideBySlugFromDB(slug: string): Promise<Guide | undefined> {
  const db = await initDB();
  if (!db) return undefined;
  return db.get(STORE_NAME, slug);
}

// Helper to seed database if empty
export async function ensureGuidesInDB() {
  const existing = await getGuidesFromDB();
  if (existing.length === 0) {
    await saveGuidesToDB(guidesData);
  }
}
