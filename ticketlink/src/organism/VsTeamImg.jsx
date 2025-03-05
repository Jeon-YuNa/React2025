import TeamImg from "../molecules/TeamImage";
import Vs from "../molecules/Vs";

const VsTeamImg = (props) => {
  const { src1, src2 } = props;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <TeamImg src={src1} />
      <Vs fontWeight={"500"} />
      <TeamImg src={src2} />
    </div>
  );
};
export default VsTeamImg;
