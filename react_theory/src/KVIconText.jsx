const KVIconText = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>
        {props.icon} {props.keyTitle}
      </span>
      <span>{props.valueTitle}</span>
    </div>
  );
};

export default KVIconText;
