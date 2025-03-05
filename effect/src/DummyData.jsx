import { useEffect, useState } from "react";
import ProductsCard from "./ProductCard";

function Dummy() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) => {
        const { products } = v;
        setData((prev) => {
          return products.map(({ title, thumbnail, rating }) => {
            return { title, thumbnail, rating };
          });
        });
      });
  }, []);

  return (
    <>
      <section>
        {data.map((v) => {
          return <ProductsCard {...v} />;
        })}
      </section>
    </>
  );
}

export default Dummy;
