import Square from "./Square";
import Circle from "./Circle";

const App = () => {
  return (
    <div style={{ display: `flex`, flexDirection: `column`, gap: `10px` }}>
      <Square></Square>
      <Circle></Circle>
      <Square></Square>
      <Circle></Circle>
      <Square></Square>
    </div>
  );
};

// 최상위 태그는 반드시 하나여야 함
export default App;

/* jsx = html + js */
/* html 태그 내용 도중 js 인식은 {} 내에서 */
