import useStore from './Store/store';

export default function Button() {
  const { methods } = useStore();
  return (
    <>
      <button
        onClick={() => {
          methods.counterSetter();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          methods.nameSetter('Guillem');
        }}
      >
        Change name
      </button>
    </>
  );
}
