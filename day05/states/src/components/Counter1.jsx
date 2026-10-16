import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center font-bold text-[30px]">
      <button
        onClick={() => {
          setCount((prev) => {
            return prev - 1;
          });
        }}
      >
        -
      </button>
      <span
        className="pl-5 pr-5 tracking-[.15em]"
        style={{ color: count < 0 ? `red` : count >= 10 ? `blue` : `black` }}
      >
        {count}
      </span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
