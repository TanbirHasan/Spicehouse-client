import { useEffect, useState } from "react";

const useProductdetail = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};

export default useProductdetail;
