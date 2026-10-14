import RecipeImg from "./RecipeImg";
import Infos from "./Infos";

const Recipe = (props) => {
  return (
    <div
      style={{
        width: `70%`,
        maxWidth: `300px`,
        minWidth: `200px`,
        height: `auto`,
        border: `1px solid black`,
        borderRadius: `20px`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        overflow: `hidden`,
        margin: `0 auto`,
      }}
    >
      <RecipeImg image={props.image} name={props.name} />
      <Infos
        name={props.name}
        rate={props.rate}
        count={props.count}
        diff={props.diff}
      />
    </div>
  );
};

export default Recipe;
