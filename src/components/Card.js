import App from "../App"

function Card(props) {
    return (
        <div className="card">
          <div className="favorite">
            <img src="/img/heart-unl.svg" alt="heart"/>
          </div>
          <img width={133} height={112} src={props.image} alt="#"/>
          <h5>{props.title}</h5>
          <div className="card-button">
            <div className="card-price">
              <span>Цена:</span>
              <b>{props.price}</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
    )
}
 
export default Card;

/*<div className="card">
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
</div>*/