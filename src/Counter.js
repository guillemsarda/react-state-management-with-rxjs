import useStore from './Store/store';

export default function Counter() {
  // const { counter } = useStore();
  const { storeStates } = useStore();
  return <h1>{storeStates[0]}</h1>;
}
