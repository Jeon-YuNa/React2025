const Price = (props) => {
  const { origin, sale } = props;
  const enPrice = Math.floor(origin - origin / sale);
  const krPrice = enPrice * 1400;
  return (
    <p style={{ display: "flex", gap: "20px", fontSize: "20px" }}>
      <span style={{ textDecoration: "line-through" }}>${origin}.00</span>
      <strong style={{ color: "red", fontSize: "30px" }}>${enPrice}.00</strong>
      <span>￦{krPrice}</span>
    </p>
  );
};
export default Price;
