import useStore from './Store/store';

export default function Button() {
  const { methods, storeStates } = useStore();
  return (
    <>
      <button
        onClick={() => {
          methods.setCounter();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          methods.setName('Guillem');
        }}
      >
        Change name
      </button>
      <h1>{storeStates.name}</h1>
    </>
  );
}
