import TableRow from "./container/TableRow";

const Namu = () => {
  const css = { backgroundColor: "green", color: "#fff" };
  const arr = [
    {
      tableData: { data: ["박봄", "유재석", "정준하"] },
      header: { headerName: "이름", ...css },
    },
    {
      tableData: { data: ["대한민국"] },
      header: { headerName: "사는 곳", ...css },
    },
  ];
  return (
    <>
      <tbody>
        {arr.map((v) => (
          <TableRow {...v} />
        ))}
      </tbody>
    </>
  );
};

export default Namu;
