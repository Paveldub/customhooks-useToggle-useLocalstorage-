import { useState } from 'react';

export const useToggle = (initialValue) => {
  const [visible, setVisible] = useState(initialValue);

  const visibleHandler = () => {
    setVisible(!visible)
  }
}