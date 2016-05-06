// TODO
var Cucumbers = () => (
  <li>Cucumbers</li>
  );

var Kale = () => (
  <li>Kale</li>
  );

var GroceryListItem = (props) => (
    <ul>
      {props.items}
    </ul>
  );

var GroceryList = () => (
  <div>
    <h2>Get some</h2>
    <GroceryListItem items={addLi(groceryItems)} />
  </div>
    
  );

var groceryItems=['kale','cucumbers','coffee','cheeses']

var addLi = (arr) => {
  return arr.map(function(item) {
    console.log(item)
    return <li>{item}</li>
  });
} 

console.log(addLi(groceryItems));

ReactDOM.render(<GroceryList />,document.getElementById('app'))