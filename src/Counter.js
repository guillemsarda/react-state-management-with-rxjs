import useStore from './Store/store';

export default function Counter() {
  const { storeStates } = useStore();
  return <h1>{storeStates.counter}</h1>;
}
