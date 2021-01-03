import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem
} from "react-bootstrap";
import Ratings from "../Components/Ratings";
import products from "../products";

export const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id);
  return (
    <div>
      <Row>
        <Col md={4}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>{product.name}</ListGroupItem>
            <ListGroupItem>
              <strong>Price: ${product.price}</strong>
            </ListGroupItem>
            <ListGroupItem>
              <Ratings value={product.rating} text={product.numReviews} />
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                Status :{product.countInStock > 0 ? "Instock" : "Out of Stock"}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-black"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
