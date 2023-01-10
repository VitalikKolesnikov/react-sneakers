import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина 
          <img  className="removeBtn" src="/img/btn-remove.svg"></img>
          </h2>
            <div className="items">
              <div className="cartItem">
                <img width={80} height={80} src="/img/sneakers/1.jpg"/>
                <div className="cartName">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 RU</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg"></img>
              </div>
              <div className="cartItem">
                <img width={80} height={80} src="/img/sneakers/1.jpg"/>
                <div className="cartName">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 RU</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg"></img>
              </div>
              <div className="cartItem">
                <img width={80} height={80} src="/img/sneakers/1.jpg"/>
                <div className="cartName">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 RU</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg"></img>
              </div>
            </div>
            <div className="cartTotalBlock">
              <ul>
                  <li className="itemPrice">
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 RU</b>
                  </li>
                  <li className="itemPrice">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 RU</b>
                  </li>
              </ul>
              <button className="greenButton">Оформить <img src="/img/arrow.svg" alt="Arrow"></img></button>
            </div>
        </div>
      </div>
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png"/>
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
          <ul className="headerRight">
            <li>
              <img width={20} height={20} src="/img/cart.svg"/>
              <span>1205руб.</span>
            </li>
            <li>
              <img width={20} height={20} src="/img/user.svg"/>
            </li>
          </ul>
      </header>
      <div className="content">
        <div className="search">
          <h1>ВСЕ КРОССОВКИ</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="sneakers">
        <Card/>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/5.jpg" alt="#"/>
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="card-button">
            <div className="card-price">
              <span>Цена:</span>
              <b>12 999 RU</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="#"/>
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="card-button">
            <div className="card-price">
              <span>Цена:</span>
              <b>12 999 RU</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="#"/>
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="card-button">
            <div className="card-price">
              <span>Цена:</span>
              <b>12 999 RU</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
