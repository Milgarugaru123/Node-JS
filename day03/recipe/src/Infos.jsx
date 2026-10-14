import Rate from "./Rate";
import ReviewCount from "./ReviewCount";
import Diff from "./Diff";

const Infos = (props) => {
  return (
    <div
      style={{
        boxSizing: `border-box`,
        width: `100%`,
        height: `max-content`,
        display: `flex`,
        flexDirection: `column`,
        gap: `12px`,
        padding: `20px`,
      }}
    >
      <div style={{ fontWeight: `bold`, textAlign: `center` }}>
        {props.name}
      </div>
      <Rate rate={props.rate} />
      <ReviewCount count={props.count} />
      <Diff diff={props.diff} />
    </div>
  );
};

export default Infos;
