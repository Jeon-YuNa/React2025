import BaseButton from "../atoms/button/BaseButton";

const TicketBtn = (props) => {
  const { ticketDate, ticketTime } = props;
  return <BaseButton ticketDate={ticketDate} ticketTime={ticketTime} />;
};
export default TicketBtn;
