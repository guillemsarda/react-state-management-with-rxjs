// Source https://isamatov.com/react-rxjs-shared-state/
import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

const arrayOfStates = [
  {
    name: 'counter',
    defaultState: 0,
    setter: (state, payload) => state + 1,
  },
];

function mainStore(states = []) {
  const subjectsArray = Array(states.length).fill(null);

  return function useStore() {
    /* Without this check, we will re-subscribe to a new Subject 
    with value 0 and therefore the store will not work */
    subjectsArray.forEach((sub, i, arr) => {
      if (!sub) {
        const state = states[i];
        arr[i] = new BehaviorSubject(state.defaultState);
      }
    });
    const statesArray = states.map((st) => {
      // Array of React States
      return useState(st.defaultState);
    });

    useEffect(() => {
      const subscriptionsArray = subjectsArray.map((subj, i) => {
        return subj.subscribe(statesArray[i][1]);
      });
      // This will be used when the component is unmounted
      return () => {
        subscriptionsArray.forEach((sub) => {
          if (sub) {
            sub.unsubscribe();
          }
        });
      };
    }, []);

    const storeStates = statesArray.map((reactArray) => reactArray[0]);
    function increment() {
      subjectsArray[0].next(storeStates[0] + 1);
    }

    return { storeStates, increment };
    // methods: { counter: () => {} }
  };
}

export default mainStore(arrayOfStates);
