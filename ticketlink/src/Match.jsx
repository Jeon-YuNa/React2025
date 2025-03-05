import Place from "./molecules/place";
import TicketBtn from "./molecules/TicketButton";
import MatchDate from "./organism/MatchDate";
import VsTeamImg from "./organism/VsTeamImg";
import VsTeamText from "./organism/VsTeamText";

function Match() {
  const css = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
    width: "80vw",
    margin: "0 auto",
    borderTop: "1px solid #aaa",
    borderBottom: "1px solid #aaa",
  };

  return (
    <div style={{ ...css }}>
      <MatchDate date={"03.01"} week={"(토)"} time={"14:00"} />
      <VsTeamImg
        src1={"https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png"}
        src2={"https://image.toast.com/aaaaab/ticketlink/TKL_8/new_Jeonbuk.png"}
      />
      <VsTeamText vsTeam1={"울산"} vsTeam2={"전북현대"} />
      <Place place={"울산문수월드컵경기장"} />
      <TicketBtn ticketDate={"2025.02.26"} ticketTime={"12:00 오픈예정"} />
    </div>
  );
}

export default Match;
