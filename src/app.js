import { addNumbers } from "./utils/add";
import { substractNumbers } from "./utils/subtract";
import { multiplyNumbers } from "./utils/multiply";
import { divideNumbers } from "./utils/divide";

console.log(addNumbers(1, 1));
console.log(substractNumbers(1, 1));
console.log(multiplyNumbers(1, 1));
console.log(divideNumbers(1, 1));

const App = () => {
  return <h1>HELLO REACT WORLD WITH JSX</h1>;
};
ReactDOM.render(<App />, document.getElementById("root"));
