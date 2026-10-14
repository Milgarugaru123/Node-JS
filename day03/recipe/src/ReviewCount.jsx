const ReviewCount = (props) => {
  return (
    <div style={{ display: `flex`, alignItems: `center`, gap: `10px` }}>
      Reviews :
      <div
        style={{
          color: `white`,
          fontWeight: `bold`,
          letterSpacing: `0.1em`,
          width: `fit-content`,
          border: `none`,
          borderRadius: `500px`,
          backgroundColor: `rgb(39, 127, 228)`,
          padding: `8px 24px`,
          margin: `0 auto`,
        }}
      >
        {props.count}
      </div>
    </div>
  );
};

export default ReviewCount;
