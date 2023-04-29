import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || ""; //쿼리가 없다면 비워두어라
    console.log("searchQuery:", searchQuery);
    const url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container className="productAll">
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
