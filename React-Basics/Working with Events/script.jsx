// Code goes here
var Product = React.createClass({
  buy: function(){
    alert("You bought and an andriod phone");
  },
  render: function(){
    return(
      <div>
        <p>Andriod - $114</p>
        <button onClick={this.buy}>Buy</button>
      </div>
    );
  }
});
React.render(<Product/>, document.getElementById("root"));
