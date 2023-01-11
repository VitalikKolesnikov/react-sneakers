function Header() {
    return (
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
              <img width={20} height={20} src="/img/icons8-user-30.png"/>
            </li>
          </ul>
      </header>
    )
}

export default Header;