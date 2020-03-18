import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const personName = ['Tareq', 'John', 'Bruch', 'Black', 'Sabbir', 'Mazharul'];
  const products = [
    { name: 'Photoshop', price: '$ 90' },
    { name: 'Illustrator', price: '$ 60' },
    { name: 'XD', price: '$45' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2>React is the best framework of javascript</h2>
        <Counter></Counter>
        <Comments></Comments>
        <ul>
          {
            personName.map(person => <li>{person}</li>)
          }
          {
            products.map(product => <li>{product.name + ' ' + product.price}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name={personName[2] + " " + personName[0]}></Person>
        <Person name="Md. Mazharul Islam" job="Front End Developer"></Person>
        <Person name="Tareq Rahman Khan" job="Electrical Engineer"></Person>
        <Person name="John Sumon" job="Freelancer"></Person>
        <Person name="Sabbir Hosen" job="Student"></Person> */}
      </header>
    </div>
  );
}
function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setComments(data))
  })
  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      <ul>
        {
          comments.map(comment => <li>{comment.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    color: 'black',
    backgroundColor: 'white',
    margin: '40px',
    padding: '40px',
    borderRadius: '15px',
    width: '400px',
    height: '250px',
    float: 'left'

  }
  const { name, price } = props.product;
  // console.log(name, price)
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button style={{ color: "white", backgroundColor: "green", padding: "15px 25px", borderRadius: "10px", border: "none" }}>Buy Now</button>
    </div >
  )
}

function Counter() {
  const [count, setCount] = useState(105);
  const handlerIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decresses</button>
      <button onMouseMove={() => setCount(count + 1)}>Increasing</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    color: 'black',
    backgroundColor: 'white',
    margin: '40px',
    padding: '40px',
    borderRadius: '30px',
    boxShadow: '5px 5px 10px grey'
  }
  return (
    <div style={personStyle}>
      <h4>Name: {props.name}</h4>
      <h5>Job: {props.job}</h5>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur enim culpa minima officia excepturi rerum quisquam numquam, accusamus natus, soluta reprehenderit? Accusantium suscipit velit, nobis temporibus doloribus officiis in hic illum. Enim impedit eos in iste, ipsam labore rem!</p>
    </div>
  )
}


export default App;
