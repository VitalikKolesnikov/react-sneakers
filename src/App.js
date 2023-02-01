import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    image: '/img/sneakers/1.jpg'
  },
  {
    name: 'Мужские Кроссовки Blazzer Mid Suede',
    price: 15600,
    image: '/img/sneakers/3.jpg'
  },
  {
    name: 'Кроссовки Puma X Aka Boku',
    price: 8999,
    image: '/img/sneakers/2.png'
  },
  {
    name: 'Мужские Кроссовки Blazzer Mid Suede',
    price: 15600,
    image: '/img/sneakers/5.jpg'
  }
]


function App() { 
  return (
    <div className="wrapper">
      <Drawer/>
      <Header/>
      <div className="content">
        <div className="search">
          <h1>ВСЕ КРОССОВКИ</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
          {arr.map((obj) => ( 
          <Card
          title = {obj.name}
          image = {obj.image}
          price = {obj.price}
          onFavorite = {() => console.log('Нажали на избранное')}
          onPlus = {() => console.log('Нажали на плюс')}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
