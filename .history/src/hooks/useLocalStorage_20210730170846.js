import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

  const getValue = () => {
    const storage = localStorage.getItem(key)

    if (storage) {
      return JSON.parse(storage)
    }

    return initialValue
  }

  const [value, setValue] = useState(getValue)

  return [value, setValue]
}