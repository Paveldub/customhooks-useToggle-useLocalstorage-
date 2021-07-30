import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storage, setStorage] = useState(initialValue)

  const saveToStorage = () => {

  }

  return [storage]
}