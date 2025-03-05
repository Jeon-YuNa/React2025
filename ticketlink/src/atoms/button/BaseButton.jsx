import BaseText from "../text/BaseText";

const BaseButton = (props) => {
  const { ticketDate, ticketTime } = props;
  return (
    <button
      style={{ border: "0", borderRadius: "10px", backgroundColor: "#ccc" }}
    >
      <BaseText fontWeight={"700"} innerText={ticketDate} />
      <BaseText fontWeight={"700"} innerText={ticketTime} />
    </button>
  );
};
export default BaseButton;
