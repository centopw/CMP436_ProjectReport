import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  ${mobile({ height: "20vh" })}

`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
  &:hover ${Image}{
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
  }
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
