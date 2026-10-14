import Title from "./Title";
import Description from "./Description";

const Info = (props) => {
  return (
    <div style={{ display: `flex`, flexDirection: `column`, gap: `10px` }}>
      <Title title={props.title} />
      <Description desc={props.desc} />
    </div>
  );
};

export default Info;
