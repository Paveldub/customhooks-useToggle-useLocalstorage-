import { useState } from 'react';

export const useToggle = (initial) => {
  const [visible, setVisible] = useState(false);

  const visibleHandler = () => {
    setVisible(!visible)
  }
}