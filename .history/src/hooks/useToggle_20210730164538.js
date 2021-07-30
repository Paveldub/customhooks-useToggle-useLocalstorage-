import { useState } from 'react';

export const useToggle = () => {
  const [visible, setVisible] = useState(false);

  const visibleHandler = () => {
    setVisible(!visible)
  }
}