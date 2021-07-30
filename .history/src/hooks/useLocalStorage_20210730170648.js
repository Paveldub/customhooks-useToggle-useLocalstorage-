import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const getValue = () => {
    const storage = localStorage.getItem(key)
  }
  const [value, setValue] = useState(initialValue)

  const saveToStorage = () => {

  }

  return [value, saveToStorage]
}