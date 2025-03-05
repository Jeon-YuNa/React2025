const HelloButton = () => {
  const hiHandler = () => {
    return console.log("하이!");
  };
  const helloHandler = (name) => {
    return console.log(`${name}님 반가워요`);
  };
  const num = (n) => {
    console.log(`번호는 ${n}입니다.`);
  };
  return (
    <>
      {Array(100)
        .fill(0)
        .map((v, i) => (
          <button key={i} onClick={() => num(i + 1)}>
            {i + 1}
          </button>
        ))}
    </>
  );
};
export default HelloButton;
