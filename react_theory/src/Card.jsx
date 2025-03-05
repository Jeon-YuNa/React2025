import CardBottom from "./CardBottom";
import CardTop from "./CardTop";

const Card = (props) => {
  const { title, subTitle, seats, commission, penalty, checked, cabin, state } =
    props;

  return (
    <article
      style={{
        width: "400px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <CardTop state={state} title={title} subTitle={subTitle} seats={seats} />
      <CardBottom
        state={state}
        commission={commission}
        penalty={penalty}
        checked={checked}
        cabin={cabin}
      />
    </article>
  );
};

export default Card;
