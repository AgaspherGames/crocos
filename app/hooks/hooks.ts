import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return newValue;
}

export default useDebounce;
