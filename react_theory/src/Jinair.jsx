import "./Jinair.css";
const Select = (props) => {
  return (
    <div className="wrap">
      <div className={props.value + " box"}>
        <div className="top">
          <strong>슈퍼로우</strong>
          <p>
            KRW <strong>{props.value == "soldOut" ? "-" : props.price}</strong>
          </p>
          <span>
            {props.value == "soldOut" ? "예약마감" : props.seat + "석"}
          </span>
        </div>
        <ul>
          <li>
            변경 수수료 <span>KRW 40,000</span>
          </li>
          <li>
            환불 위약금 <span>KRW 100,000</span>
          </li>
          <li>
            무료 위탁 수하물 <span>15kg</span>
          </li>
          <li>
            무료 기내 수하물 <span>10kg</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Select;
