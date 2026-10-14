const Diff = (props) => {
  const diffColor = [];
  if (props.diff == `Easy`) diffColor.push(`green`);
  else if (props.diff == `Medium`) diffColor.push(`orange`);
  else if (props.diff == `Hard`) diffColor.push(`red`);
  else diffColor.push(`black`);

  return (
    <div style={{ display: `flex`, alignItems: `center`, gap: `10px` }}>
      난이도 :
      <div
        style={{ color: diffColor[0], fontSize: `18px`, fontWeight: `bold` }}
      >
        {props.diff}
      </div>
    </div>
  );
};

export default Diff;
