function Drawer() {
    return (
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
    )
}

export default Drawer;