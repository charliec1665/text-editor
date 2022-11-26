import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// EXPORT PUT function
// Export content to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // create connection to the database and version
  const textDb = await openDB('jate', 1);

  // create new transaction and specify database and data privileges
  const tx = textDb.transaction('jate', 'readwrite');

  // open up object store
  const store = tx.objectStore('jate');

  // use the .put() method to get all data in the database
  const request = store.put({content: content});
  const result = await request;
  console.log('Data saved to the database!', result);
}

// EXPORT GET function
// Get all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // create connection to the database and version
  const textDb = await openDB('jate', 1);

  // create new transaction and specify database and data privileges
  const tx = textDb.transaction('jate', 'readonly');

  // open up object store
  const store = tx.objectStore('jate');

  // use the .getAll() method to get all data in the database
  const request = store.getAll();

  // get confirmation of the request
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
