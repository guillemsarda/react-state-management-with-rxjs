# react-state-management-with-rxjs

This is a simple example on how to build a state management tool in React using `BehaviorSubject` from `rxjs`.
Following a Redux-like syntax, you can now create multiple states that will be handled automatically.

In order to create your own state go to the `Store` folder and create there your own state. This object has to be like this:
```
const counterHandler = {
  name: 'counter', // The name of the state
  defaultState: 0, // The default state of any type
  setter: (state, payload) => { // `state` is the previous state and `payload` a variable to discern the different functionalities
    return ... // Return always the value that you want to have next
  }
}
```

Then you can create a `store.js` file that will import `createStore` from `store-creator.js` as well as the states that you have created:
```
import { counterHandler } from './state';
import mainStore from './store-creator';

export default mainStore([counterHandler, ...]); // This takes an *array* of all the states handlers and it will create the `useStore` hook
```

Now you can use in any component the states:
```
import useStore from './Store/store';

export default function Button() {
  // useStore returns `storeStates` (an object with all the states) and `methods` (an object with all the setter functions)
  const { storeStates, methods } = useStore(); 
  return (
    <>
      <button
        onClick={() => {
          // You can access the setter function of your state following this pattern: `name of the state` + 'Setter'
          methods.counterSetter(); 
        }}
      >
        Increment
      </button>
        Change name
      </button>
      // You can access the state by accessing the state's name
      <h1>{storeStates.counter}</h1>
    </>
  );
}
```
_____
To launch the App you only have to access the root directory and run:

- `npm i` to install all the dependencies*.
- `npm start` to run the app in the browser.
  
Cheers! ✌🏼

PS: I initially built this with [CodeSandbox](https://codesandbox.io/s/react-state-management-with-behaviorsubject-j3oqbi).

\* If it throws an error when installing, run `npm i --legacy-peer-deps`, instead.

**When starting, I used this rgreat article https://isamatov.com/react-rxjs-shared-state/ to polish some things that I wasn't doing properly when subscribing.**