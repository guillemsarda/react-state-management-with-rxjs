import useStore from './Store/store';

export default function Name() {
  const { storeStates } = useStore();
  return (
    <>
      <h1>{storeStates.name}</h1>
    </>
  );
}
