import useStore from './Store/store';

export default function Button() {
  const { methods, storeStates } = useStore();
  return (
    <>
      <button
        onClick={() => {
          methods.counter();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          methods.test('Guillem');
        }}
      >
        Change name
      </button>
      <h1>{storeStates.test}</h1>
    </>
  );
}
