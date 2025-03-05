const TableData = (props) => {
  const { data } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
      {data.map((v) => {
        return <dt>{v}</dt>;
      })}
    </div>
  );
};
export default TableData;
