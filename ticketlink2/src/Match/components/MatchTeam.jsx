const Team = (props) => {
  const { team2Logo, team1Logo, team1Text, team2Text } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <figure>
        <img style={{ width: "100px" }} src={team1Logo} alt="" />
      </figure>
      <span style={{ fontSize: "20px", fontWeight: "600" }}>VS</span>
      <figure>
        <img style={{ width: "100px" }} src={team2Logo} alt="" />
      </figure>

      <strong>
        <span>{team1Text}</span>
        vs
        <span>{team2Text}</span>
      </strong>
    </div>
  );
};
export default Team;
