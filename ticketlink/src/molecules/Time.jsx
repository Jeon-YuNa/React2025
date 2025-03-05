import BaseText from "../atoms/text/BaseText";

const Time = (props) => {
  const { time, week } = props;
  return (
    <div>
      <BaseText
        fontWeight={"500"}
        fontSize={"12px"}
        color={"#555"}
        innerText={week}
      />
      <BaseText
        fontWeight={"500"}
        fontSize={"12px"}
        color={"#555"}
        innerText={time}
      />
    </div>
  );
};
export default Time;
