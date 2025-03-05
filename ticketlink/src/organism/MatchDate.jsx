import Date from "../molecules/Date";
import Time from "../molecules/Time";

const MatchDate = (props) => {
  const { date, week, time } = props;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Date date={date} />
      <Time week={week} time={time} />
    </div>
  );
};
export default MatchDate;
