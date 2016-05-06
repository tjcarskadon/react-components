// TODO
var GroceryList = () => (
    <ul>
      <Cucumbers />
      <Kale />
    </ul>
  );

var Cucumbers = () => (
  <li>Cucumbers</li>
  );

var Kale = () => (
  <li>Kale</li>
  );

ReactDOM.render(<GroceryList />,document.getElementById('app'))