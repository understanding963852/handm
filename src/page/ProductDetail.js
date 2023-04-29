import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    console.log(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col className="produt-desc">
          <div>{product?.title}</div>
          <div>\ {product?.price}</div>
          <div className="choice">
            {product?.choice ? "Conscious choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
