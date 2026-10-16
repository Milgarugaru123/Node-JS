import { useState } from "react";

const Counter = () => {
  /* react 문법 */
  const [count, setCount] = useState(0);

  const test = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      {/* <span className="count mr-3">0</span>
      <button className="plusBtn">+</button> */}
      <span className=" mr-3">{count}</span>
      <button onClick={test}>+</button>
    </>
  );
};

// const count = document.querySelector(`.count`);
// const plusBtn = document.querySelector(`.plusBtn`);
// plusBtn.addEventListener(`click`, () => {
//   count.innerHTML = +count.innerHTML + 1;
// });

export default Counter;
