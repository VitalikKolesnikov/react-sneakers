import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
  },
  {
    name: 'Мужские Кроссовки Blazzer Mid Suede',
    price: 15600,
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
          <Card 
          title = "Мужские Кроссовки Blazzer Mid Suede"
          price = "12999"
          image = "/img/sneakers/1.jpg"/>
          <Card 
          title = "Мужские Кроссовки Nike Air Max 270"
          price = "15600"
          image = "/img/sneakers/9.jpg"/>
          {/* {arr.map((obj) => ( 
          <Card/>
          ))}  */}
        </div>
      </div>
    </div>
  );
}

export default App;
