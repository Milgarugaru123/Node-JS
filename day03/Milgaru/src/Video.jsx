import Thumbnail from "./Thumbnail";
import Info from "./Info";
import LikeBtn from "./LikeBtn";

const Video = (props) => {
  return (
    <article
      style={{
        width: `100%`,
        display: `flex`,
        justifyContent: `start`,
        alignItems: `center`,
        gap: `10px`,
      }}
    >
      <Thumbnail bg={props.bg} />
      <div
        style={{
          width: `100%`,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <Info title={props.title} desc={props.desc}></Info>
        <LikeBtn />
      </div>
    </article>
  );
};

export default Video;
