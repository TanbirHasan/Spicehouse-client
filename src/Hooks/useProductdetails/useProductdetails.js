import { useEffect, useState } from "react";

const useServiceDetail = (productId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/service/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};

export default useServiceDetail;
