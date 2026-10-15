const RecipeImg = (props) => {
  return (
    <img
      src={props.image}
      alt={props.name}
      style={{ width: `100%`, aspectRatio: `4 / 3`, objectFit: `cover` }}
    />
  );
};

export default RecipeImg;
