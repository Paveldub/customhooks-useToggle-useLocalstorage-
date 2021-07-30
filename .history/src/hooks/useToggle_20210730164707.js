import { useState } from 'react';

export const useToggle = (initialValue) => {
  const [visible, setVisible] = useState(false);

  const visibleHandler = () => {
    setVisible(!visible)
  }
}