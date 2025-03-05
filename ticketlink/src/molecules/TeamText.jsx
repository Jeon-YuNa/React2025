import BaseText from "../atoms/text/BaseText";
import Vs from "./Vs";

const TeamText = (props) => {
  const { vsTeam } = props;
  return <BaseText fontWeight={"700"} fontSize={"18px"} innerText={vsTeam} />;
};
export default TeamText;
