import {useState} from 'react';

export const useLocalStorage = (initialValue) => {
  const [storage, setStorage] = useState(initialValue)

  const saveToStorage = () => {
    
  }

  return [storage]
}