const TableHeader = (props) => {
  const { headerName, backgroundColor, color } = props;
  return (
    <th
      style={{
        width: "100px",
        backgroundColor,
        color,
        padding: "10px",
      }}
    >
      {headerName}
    </th>
  );
};
export default TableHeader;
