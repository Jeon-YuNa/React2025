import BaseText from "../atoms/text/BaseText";

const Date = (props) => {
  const { date } = props;
  return <BaseText fontSize={"30px"} innerText={date} />;
};
export default Date;
