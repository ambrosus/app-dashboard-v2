const namespace = 'amb_';
const storage = sessionStorage;

export const storageSet = (key, value) =>
  storage.setItem(`${namespace}${key}`, JSON.stringify(value));

export const storagePut = (key, value) => {
  if (!storage.get(key)) {
    return storage.setItem(`${namespace}${key}`, JSON.stringify(value));
  }
  return false;
};

export const storageGet = (key) => {
  try {
    return JSON.parse(storage.getItem(`${namespace}${key}`));
  } catch (err) {
    return storage.getItem(`${namespace}${key}`);
  }
};

export const storageDelete = (key) => storage.removeItem(`${namespace}${key}`);

export const storageClear = () => storage.clear();
