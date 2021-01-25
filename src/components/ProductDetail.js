import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper>
      <h1>I should be a {product.name}</h1>
      <img src="I should be a product image" alt="I should be a {product.name}" />
      <p>I should be a product description</p>
      <p>I should be a product price</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
