import Day from "../Match/components/MatchDay";
import Team from "../Match/components/MatchTeam";
import Place from "./components/Plack";
import Button from "./components/TicketButton";

const Match = () => {
  const css = {
    display: "flex",
    width: "80vw",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "0 auto 20px",
    borderBottom: "1px solid #ccc",
  };
  const arr = [
    {
      day: "03.03",
      week: "(월)",
      time: "14:00",
      team1Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
      team2Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_8/new_Jeonbuk.png",
      team1Text: "울산",
      team2Text: "김천",
      openDay: "2025.02.26 (수)",
      openTime: "18:00 오픈예정",
    },
    {
      day: "03.04",
      week: "(화)",
      time: "15:00",
      team1Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
      team2Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_4/jeju_em_250115.png",
      team1Text: "울산",
      team2Text: "제주",
      place: "서울월드컵경기장",
      openDay: "2025.03.24 (월)",
      openTime: "18:00 오픈예정",
    },
    {
      day: "03.04",
      week: "(화)",
      time: "15:00",
      team1Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
      team2Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_4/jeju_em_250115.png",
      team1Text: "울산",
      team2Text: "제주",
      place: "서울월드컵경기장",
      openDay: "2025.03.24 (월)",
      openTime: "18:00 오픈예정",
    },
    {
      day: "03.04",
      week: "(화)",
      time: "15:00",
      team1Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
      team2Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_4/jeju_em_250115.png",
      team1Text: "울산",
      team2Text: "제주",
      place: "서울월드컵경기장",
      openDay: "2025.03.24 (월)",
      openTime: "18:00 오픈예정",
    },
    {
      day: "03.04",
      week: "(화)",
      time: "15:00",
      team1Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
      team2Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
      team1Text: "울산",
      team2Text: "FC서울",
      place: "서울월드컵경기장",
      openDay: "2025.03.24 (월)",
      openTime: "18:00 오픈예정",
    },
    {
      day: "03.04",
      week: "(화)",
      time: "15:00",
      team1Logo:
        "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
      team2Logo: "https://image.toast.com/aaaaab/ticketlink/TKL_6/Gangwon.png",
      team1Text: "울산",
      team2Text: "강원",
      place: "서울월드컵경기장",
      openDay: "2025.03.24 (월)",
      openTime: "18:00 오픈예정",
    },
  ];
  const element = arr.map((v) => {
    return (
      <div style={css}>
        <Day day={v.day} week={v.week} time={v.time}></Day>
        <Team
          team1Logo={v.team1Logo}
          team2Logo={v.team2Logo}
          team1Text={v.team1Text}
          team2Text={v.team2Text}
        ></Team>
        <Place place={v.place}></Place>
        <Button openDay={v.openDay} openTime={v.openTime}></Button>
      </div>
    );
  });
  return <div>{element}</div>;
};
export default Match;
