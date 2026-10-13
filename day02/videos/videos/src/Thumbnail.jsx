const Thumbnail = (props) => {
  return (
    <div
      style={{
        width: `160px`,
        aspectRatio: `4 / 3`,
        borderRadius: `12px`,
        backgroundColor: props.bg,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <div
        style={{
          height: `40%`,
          aspectRatio: `1 / 1`,
          borderRadius: `100%`,
          backgroundColor: `rgba(255, 255, 255, 0.7)`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <div
          style={{
            width: `100%`,
            height: `100%`,
            clipPath: `polygon(35% 28%,
              35% 75%,
              72% 50%)`,
            backgroundColor: props.bg,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Thumbnail;
