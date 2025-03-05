import TeamText from "../molecules/TeamText";
import Vs from "../molecules/Vs";

const VsTeamText = (props) => {
  const { vsTeam1, vsTeam2 } = props;
  return (
    <p style={{ display: "flex", alignItems: "center" }}>
      <TeamText fontWeight={"700"} fontSize={"16px"} vsTeam={vsTeam1} />
      <Vs fontWeight={"700"} fontSize={"16px"} color={"#000"} />
      <TeamText fontWeight={"700"} fontSize={"16px"} vsTeam={vsTeam2} />
    </p>
  );
};
export default VsTeamText;
