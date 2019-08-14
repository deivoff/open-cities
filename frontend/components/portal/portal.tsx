import { useRef, useEffect } from 'react';

export const usePortal = (id: string) => {
  const rootElemRef = useRef(
    typeof document !== 'undefined' ? document.createElement('div') : null
  );

  useEffect(() => {
    const parentNode =
      typeof document !== 'undefined' ? document.querySelector(`#${id}`) : null;
    if (parentNode !== null && rootElemRef.current) {
      parentNode.appendChild(rootElemRef.current);
    }

    // return rootElemRef.current;
  }, [id]);

  return rootElemRef.current ? rootElemRef.current : null;
};
