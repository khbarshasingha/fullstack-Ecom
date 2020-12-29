import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import { Product } from "../Components/Product";
export const HomeScreen = () => {
  return (
    <>
      <h1> Latest Products</h1>
      <Row>
        {products.map(product => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              {" "}
              <Product
                product={product}
                // id={product._id}
                // name={product.name}
                // img={product.image}
                // rating={product.rating}
                // reviews={product.numReviews}
                // price={product.price}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
