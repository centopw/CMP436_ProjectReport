import { React } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";

import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
  position: sticky;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Logo = styled.h1`
  text-decoration: none;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/products/shorts">
            <MenuItem>Shorts</MenuItem>
          </Link>
          <Link to="/products/coat">
            <MenuItem>Coats</MenuItem>
          </Link>
          <Link to="/products/jeans">
            <MenuItem>Jeans</MenuItem>
          </Link>
        </Left>
        <Center>
          <Link to="/">
            <Logo>FastEcommerce</Logo>
          </Link>
        </Center>
        <Right>
        {currentUser ? (
            <>
              <MenuItem>{currentUser.username}</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </>
          ) : (
            <>
              <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary" overlap="rectangular">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
