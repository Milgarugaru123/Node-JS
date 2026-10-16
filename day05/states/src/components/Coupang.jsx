import { useState } from "react";

const Coupang = () => {
  const items = [
    { name: `고양이 사료`, price: 5000 },
    { name: `물`, price: 4400 },
    { name: `물티슈`, price: 2200 },
  ];

  const [counts, setCount] = useState(() => {
    const tempCounts = [{}];
    Array(items.length)
      .fill(0)
      .forEach((x, i) => {
        tempCounts[0] = { ...tempCounts[0], [`${items[i].name}`]: 0 };
      });
    return tempCounts[0];
  });

  console.log(counts);

  const [total, setTotal] = useState(0);

  const add = (item, i) => {
    setTotal((prev) => (prev += items[i].price));
    setCount((prev) => {
      prev[item] = prev[item] + 1;
      return { ...prev };
    });
  };
  const minus = (item, i) => {
    setTotal((prev) => (prev -= counts[item] === 0 ? 0 : items[i].price));
    setCount((prev) => {
      prev[item] = prev[item] === 0 ? 0 : prev[item] - 1;
      return { ...prev };
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div />
      {Array(items.length)
        .fill(0)
        .map((x, i) => {
          return (
            <div className="flex text-xl justify-between">
              <span>{items[i].name}</span>
              <div>
                <button
                  onClick={() => {
                    minus(items[i].name, i);
                  }}
                >
                  -
                </button>
                <span className="px-4">{counts[`${items[i].name}`]}</span>
                <button
                  onClick={() => {
                    add(items[i].name, i);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      <div>총 금액: {total}원</div>
    </div>
  );
};

export default Coupang;
