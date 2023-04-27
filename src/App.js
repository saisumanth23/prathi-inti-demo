//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import About from './components/About/About';
import Item from './components/AddToCart/addToCart';
import Footer from './components/Footer/Footer';
import Header from './components/header/header';
import CustomTabs from './components/Tab/tabs';
import styled from 'styled-components';

const StyledItemsContainer = styled.div`
display: flex;
justify-content: space-evenly;
padding: 20px;
}
`

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const items = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description of Item 1',
      price: 10.99,
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description of Item 2',
      price: 15.99,
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description of Item 3',
      price: 20.99,
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 4,
      name: 'Item 4',
      description: 'Description of Item 4',
      price: 20.99,
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 5,
      name: 'Item 5',
      description: 'Description of Item 5',
      price: 20.99,
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 6,
      name: 'Item 6',
      description: 'Description of Item 5',
      price: 20.99,
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 7,
      name: 'Item 7',
      description: 'Description of Item 5',
      price: 20.99,
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 8,
      name: 'Item 8',
      description: 'Description of Item 5',
      price: 20.99,
      image: 'https://source.unsplash.com/random/400x400',
    },
  ];

  
  const tabs = [
    {
      label: 'ABOUT',
      content: <About/>,
    },
    {
      label: 'VEG PICKLES',
      content:  <StyledItemsContainer>
      {items.map((item) => (
        <Item key={item.id} {...item} addToCart={addToCart} />
      ))}
    </StyledItemsContainer>,
    },
    {
      label: 'NON-VEG PICKLES',
      content: <div>Content of Tab 3</div>,
    },
  ];

  return (
    <div className="App">
      <Header/>
      <CustomTabs tabs={tabs} />
      <Footer/>
    </div>
  );
}

export default App;
