import { useEffect, useState } from "react";

const useProductdetail = (productId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};

export default useProductdetail;
