import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  
  const getValue = () => {
    const storage = localStorage.getItem(key)

    if (storage) {
      return JSON.parse()
    }
  }

  const [value, setValue] = useState(initialValue)

}