import { useState } from "react";

const Cart = () => {
  const [price, setPrice] = useState(0);

  return (
    <div className="w-60 flex flex-col items-center gap-4">
      <div className="w-full flex justify-between items-center">
        <span>아이스티 2000원</span>{" "}
        <button
          className="border border-cyan-600 p-2 rounded-2xl cursor-pointer"
          onClick={() => {
            setPrice((prev) => prev + 2000);
          }}
        >
          구매
        </button>
      </div>
      <div className="w-full flex justify-between items-center">
        <span>초코라떼 3500원</span>{" "}
        <button
          className="border border-cyan-600 p-2 rounded-2xl cursor-pointer"
          onClick={() => {
            setPrice((prev) => prev + 3500);
          }}
        >
          구매
        </button>
      </div>
      <div className="w-full flex justify-between items-center">
        <span>아메리카노 1500원</span>{" "}
        <button
          className="border border-cyan-600 p-2 rounded-2xl cursor-pointer"
          onClick={() => {
            setPrice((prev) => prev + 1500);
          }}
        >
          구매
        </button>
      </div>
      <button
        className="border border-cyan-600 p-2 rounded-2xl bg-amber-200 cursor-pointer"
        onClick={() => {
          setPrice((prev) => (prev = 0));
        }}
      >
        초기화
      </button>
      <span>총 금액: {price}원</span>
    </div>
  );
};

export default Cart;
