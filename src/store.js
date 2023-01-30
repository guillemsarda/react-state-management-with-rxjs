// Source https://isamatov.com/react-rxjs-shared-state/
import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
let counterSubject = null;

export default function useStore() {
  /* Without this check, we will re-subscribe to a new Subject 
  with value 0 and therefore the store will not work */
  if (!counterSubject) counterSubject = new BehaviorSubject(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const subscription = counterSubject.subscribe(setCounter);
    // This will be used when the component is unmounted
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  function increment() {
    counterSubject.next(counter + 1);
  }

  return { increment, counter };
}
