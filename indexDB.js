// indexedDB.js
const DB_NAME = 'commentsDB';
const DB_VERSION = 1;
const STORE_NAME = 'comments';

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const getTransaction = async (mode) => {
  const db = await openDB();
    const tx = db.transaction(STORE_NAME, mode);
    return tx.objectStore(STORE_NAME);
};

export const getComments = (slug) => {
  return getTransaction('readonly').then((store) => {
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        const comments = request.result.filter(comment => comment.slug === slug);
        resolve(comments);
      };
      request.onerror = () => reject(request.error);
    });
  });
};

export const addComment = (comment) => {
  return getTransaction('readwrite').then((store) => {
    return new Promise((resolve, reject) => {
      const request = store.add(comment);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

export const updateComment = (comment) => {
  return getTransaction('readwrite').then((store) => {
    return new Promise((resolve, reject) => {
      const request = store.put(comment);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

export const deleteComment = (id) => {
  return getTransaction('readwrite').then((store) => {
    return new Promise((resolve, reject) => {
      const request = store.delete(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};
