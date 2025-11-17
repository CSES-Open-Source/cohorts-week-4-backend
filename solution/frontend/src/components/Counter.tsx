import { useState } from "react";
import { updateCounter, deleteCounter } from "./../api/counter";

interface CounterProps {
  id: string;
  name: string;
  initial: number;
  onDelete: (id: string) => void;
}

function Counter({ id, name, initial, onDelete }: CounterProps) {
  const [count, setCount] = useState(initial);

  const changeCount = async (newCount: number) => {
    setCount(newCount);
    await updateCounter(id, newCount);
  };

  const handleDelete = async () => {
    await deleteCounter(id);
    onDelete(id);
  };

  return (
    <div className="counter">
      <h2>{name}</h2>

      <p>{count}</p>

      <div className="buttons">
        <button onClick={() => changeCount(count - 1)}>-</button>
        <button onClick={() => changeCount(0)}>Reset</button>
        <button onClick={() => changeCount(count + 1)}>+</button>
      </div>

      <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Counter;
