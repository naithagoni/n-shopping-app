/**
 * Why we need to cancell axios request?: - Axios requests are asynchronous, meaning they run in the background without directly blocking the application thread.
 *
 * When a component unmounts, we need to cancel/abort any potentially
 * ongoing Axios calls that result in a state update on success / fail.
 * This function sets up the appropriate useEffect to handle the canceling.
 *
 * @returns {getAbortSignal: function}
 * getAbortSignal - The getAbortSignal function provides the current controller's signal for use in Axios requests.
 */
import { useRef, useEffect, useCallback } from "react";

const useAbortController = () => {
  // This hook uses useRef to store the AbortController instance.
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Create a new controller on each render.
    // Create a new controller on mount and abort ongoing requests on unmount
    abortControllerRef.current = new AbortController();

    // Cleanup function to abort ongoing requests on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  // Retrieve the AbortSignal for use in fetch requests
  const getAbortSignal = useCallback(() => {
    // if (!abortControllerRef.current) {
    //   // Create a new controller if not present
    //   abortControllerRef.current = new AbortController();
    // }
    if (abortControllerRef.current) {
      return abortControllerRef.current.signal;
    } else {
      throw new Error("AbortController not yet initialized");
    }
  }, []);

  return { getAbortSignal };
};

export default useAbortController;
