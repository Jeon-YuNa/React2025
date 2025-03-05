const Coffee = () => {
  const coffee = [
    {
      name: "바닐라크림콜드브루",
      price: "5500",
    },
    {
      name: "아메리카노",
      price: "2000",
    },
    {
      name: "프라푸치노",
      price: "3500",
    },
    {
      name: "화이트초코",
      price: "4500",
    },
    {
      name: "카페라떼",
      price: "4000",
    },
  ];
  const [menu, setMenu] = useState(0);
  const prevMenu = () => {
    setMenu((prev) => {
      if (prev == 0) {
        alert("첫 메뉴입니다!");
        return 0;
      } else {
        return prev - 1;
      }
    });
  };
  const nextMenu = () => {
    setMenu((prev) => {
      if (prev == 4) {
        alert("마지막 메뉴입니다!");
        return 4;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <>
      <button onClick={prevMenu}>이전메뉴</button>
      <p>메뉴 이름:{coffee[menu].name}</p>
      <p>메뉴 가격:{coffee[menu].price}</p>
      <button onClick={nextMenu}>다음메뉴</button>
    </>
  );
};
export default Coffee;
