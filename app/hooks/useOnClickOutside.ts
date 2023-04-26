import { useEffect, useCallback } from "react";

export const useOnClickOutside = (
    targetRef: React.MutableRefObject<HTMLDivElement | null>,
    setIsOpen: (value: React.SetStateAction<boolean>) => void
) => {
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if(event.target && targetRef.current && (event.target as any)?.contains?.(targetRef.current))
        setIsOpen(false)
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);
};
