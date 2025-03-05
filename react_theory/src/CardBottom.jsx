import { FaCcMastercard, FaSuitcaseRolling } from "react-icons/fa";
import { PiCoinsFill } from "react-icons/pi";
import KVIconText from "./KVIconText";
import { IoBagRemoveSharp } from "react-icons/io5";

const CardBottom = (props) => {
  const { commission, penalty, checked, cabin, state } = props;
  const obj = {
    soldout: {
      color: "#888888",
      backgroundColor: "#efefef",
    },
    selected: {
      color: "#192547",
      backgroundColor: "white",
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
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTop: "1px dotted #888888",
        color: obj[state].color,
        backgroundColor: obj[state].backgroundColor,
      }}
    >
      <KVIconText
        icon={<PiCoinsFill />}
        keyTitle={"변경 수수료"}
        valueTitle={commission}
      />
      <KVIconText
        icon={<FaCcMastercard />}
        keyTitle={"환불 위약금"}
        valueTitle={penalty}
      />
      <KVIconText
        icon={<FaSuitcaseRolling />}
        keyTitle={"무료 위탁 수하물"}
        valueTitle={checked}
      />
      <KVIconText
        icon={<IoBagRemoveSharp />}
        keyTitle={"무료 기내 수하물"}
        valueTitle={cabin}
      />
    </div>
  );
};

export default CardBottom;
