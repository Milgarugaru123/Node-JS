import { Play } from "lucide-react";

const Thumbnail = (props) => {
  return (
    <div
      style={{
        width: `150px`,
        height: `100px`,
        background: props.bg,
        borderRadius: `12px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Play
        style={{
          //   backgroungColor: `rgba(255, 255, 255, 0.7)`,
          borderRadius: `100%`,
        }}
      />
    </div>
  );
};

export default Thumbnail;
