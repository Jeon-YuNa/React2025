const Service = (props) => {
  const iconStyle = {
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    borderRadius: "50%",
  };
  console.log(props.icon);
  return (
    <li
      style={{ listStyle: "none", width: "fit-content", marginRight: "50px" }}
    >
      <span style={iconStyle}>{props.icon}</span>
      <p style={{ textAlign: "center", fontWeight: "700" }}>{props.name}</p>
    </li>
  );
};
export default Service;
