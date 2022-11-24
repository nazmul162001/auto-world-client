import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("data.json").then((res) => setData(res.data));
  }, []);

  return (
    <section className="product p-4 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data && data.map((d) => <Product data={d} key={d._id} />)}
    </section>
  );
};

export default Products;
