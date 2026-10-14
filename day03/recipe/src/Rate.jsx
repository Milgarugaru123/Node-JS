const Rate = (props) => {
  return (
    <div
      style={{
        display: `flex`,
        flexFlow: `row wrap`,
        alignItems: `center`,
        gap: `10px`,
        whiteSpace: `nowrap`,
      }}
    >
      평점 :<div>{props.rate}</div>
      <div>
        {Array(5)
          .fill(0)
          .map((x, i) => (i + 1 <= Math.floor(+props.rate) ? `⭐` : ``))
          .reduce((x, y) => x + y)}
      </div>
    </div>
  );
};

export default Rate;
