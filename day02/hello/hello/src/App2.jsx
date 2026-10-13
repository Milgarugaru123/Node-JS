import Square from "./Square2";

const App = () => {
  return (
    <div style={{ display: `flex`, flexDirection: `column`, gap: `10px` }}>
      <Square bg={`red`}></Square>
      <Square bg={`yellow`}></Square>
      <Square bg={`blue`}></Square>
    </div>
  );
};

export default App;
