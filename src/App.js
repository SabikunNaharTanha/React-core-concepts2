import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'laptop', price: 100000, color: 'Maroon' },
    { name: 'phone', price: 15000, color: 'Grey' },
    { name: 'watch', price: 2000, color: 'Pink' },
    { name: 'tablet', price: 15000, color: 'Black' }
  ]



  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price} color={product.color}></Product>)
      }


      {/* <Product name="laptop" price="55000"></Product>
      <Product name="phone" price="18000"></Product>
      <Product name="Watch" price="1500"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Color:{props.color}</p>
    </div>

  );
}

export default App;
