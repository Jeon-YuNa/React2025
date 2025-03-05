import Insta from "./insta";
import Sausage from "./Sausage";
import Service from "./Service";
import { FaHotel } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import Select from "./Jinair";
import Card from "./Card";

function App() {
  return (
    <section style={{ display: "flex", gap: "50px" }}>
      <Card
        state={"soldout"}
        title={"슈퍼로우"}
        subTitle={"예약마감"}
        seats={"-"}
        commission={"KRW 60,000"}
        penalty={"최대 KRW 100,000"}
        checked={"15kg"}
        cabin={"10kg"}
      />
      <Card
        state={"selected"}
        title={"플렉스"}
        subTitle={"KRW 294,000"}
        seats={"9석"}
        commission={"KRW 40,000"}
        penalty={"최대 KRW 100,000"}
        checked={"15kg"}
        cabin={"10kg"}
      />
      <Card
        state={"notSelected"}
        title={"지니"}
        subTitle={"KRW 419,200"}
        seats={"9석"}
        commission={"KRW 20,000"}
        penalty={"최대 KRW 70,000"}
        checked={"15kg"}
        cabin={"10kg"}
      />
    </section>
  );
}

export default App;
