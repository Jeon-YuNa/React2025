const Insta = (props) => {
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        <strong style={{ fontSize: "20px" }}>{props.count || 0}</strong>
      </p>
      <p style={{ textAlign: "center", fontSize: "18px" }}>{props.name}</p>
    </div>
  );
};
export default Insta;
