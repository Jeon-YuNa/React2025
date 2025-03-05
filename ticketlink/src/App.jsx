import Match from "./Match";

function App() {
  const arr = [
    {
      date: { date: ["03.01", "03.09"] },
      week: { week: ["(토)", "(일)"] },
      time: { time: ["14:00", "14:00"] },
      src1: {
        src1: [
          "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
          "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
        ],
      },
      src2: {
        src2: [
          "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
          "https://image.toast.com/aaaaab/ticketlink/TKL_2/ver25_Ulsan.png",
        ],
      },
      vsTeam1: {
        vsTeam1: ["울산", "울산"],
      },
      vsTeam2: {
        vsTeam1: ["울산", "제주"],
      },
      place: {
        place: ["울산문수월드컵경기장", "울산문수월드컵경기장"],
      },
      ticketDate: {
        ticketDate: ["2025.022.26", "2025.03.06"],
      },
      ticketTime: {
        ticketTime: ["12:00 오픈예정", "12:00 오픈예정"],
      },
    },
  ];

  return (
    <div>
      {arr.map((v) => (
        <Match {...v} />
      ))}
    </div>
  );
}

export default App;
