

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
              <span>1205</span>
            </li>
            <li>
              <img width={20} height={20} src="/img/user.svg"/>
            </li>
          </ul>
      </header>
      <div className="content">
        <h1>ВСЕ КРОССОВКИ</h1>
      </div>
    </div>
  );
}

export default App;
