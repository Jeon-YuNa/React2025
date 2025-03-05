import Seats from "./Seats";
import SubTitle from "./SubTitle";
import Title from "./Title";

const CardTop = (props) => {
  const { title, subTitle, seats, state } = props;

  const obj = {
    soldout: {
      color: "#888888",
      backgroundColor: "#efefef",
    },
    selected: {
      color: "white",
      backgroundColor: "#192547",
    },
    notSelected: {
      color: "#192547",
      backgroundColor: "white",
    },
  };

  return (
    <div
      style={{
        padding: "30px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        color: obj[state].color,
        backgroundColor: obj[state].backgroundColor,
      }}
    >
      <Title title={title} />
      <SubTitle subTitle={subTitle} />
      <Seats seats={seats} />
    </div>
  );
};

export default CardTop;
