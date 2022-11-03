

function App() {
  return (
    <div className="wrapper">
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
        <h1>ВСЕ КРОССОВКИ</h1>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="#"/>
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
  );
}

export default App;
