import useStore from "./store";

export default function Counter() {
  const { counter } = useStore();
  return <h1>{counter}</h1>;
}
