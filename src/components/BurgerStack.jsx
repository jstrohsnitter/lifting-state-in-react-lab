// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return <ul>
    {props.stack.map((ingredient, index) => {
      return <li key={index}>{ingredient}<button >-</button></li>;
    })}
</ul>;
};
  
  
  export default BurgerStack;
  