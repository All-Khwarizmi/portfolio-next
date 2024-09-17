import { useEffect, useState } from 'react';

// Define breakpoints
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Create a type for the breakpoints
type Breakpoint = keyof typeof breakpoints;

// Create a union type for the possible queries
type QueryType =
  | `(min-width: ${(typeof breakpoints)[Breakpoint]})`
  | `(max-width: ${(typeof breakpoints)[Breakpoint]})`
  | `(min-width: ${(typeof breakpoints)[Breakpoint]}) and (max-width: ${(typeof breakpoints)[Breakpoint]})`;

/**
 * Custom hook that returns a boolean indicating whether the current viewport matches the given media query.
 *
 * @param query - The media query to match against the viewport.
 * @returns A boolean indicating whether the current viewport matches the given media query.
 */
const useMediaQuery = (query: QueryType): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Helper function to create min-width query
export const min = (breakpoint: Breakpoint): QueryType =>
  `(min-width: ${breakpoints[breakpoint]})` as const;

// Helper function to create max-width query
export const max = (breakpoint: Breakpoint): QueryType =>
  `(max-width: ${breakpoints[breakpoint]})` as const;

// Helper function to create between query
export const between = (min: Breakpoint, max: Breakpoint): QueryType =>
  `(min-width: ${breakpoints[min]}) and (max-width: ${breakpoints[max]})` as const;

export default useMediaQuery;
