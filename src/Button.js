import useStore from "./store";

export default function Button() {
  const { increment } = useStore();
  return <button onClick={increment}>Increment</button>;
}
