import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./css/Home.css";
import logo1 from "../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { orderContext } from "./store/ContextApi";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 2,
      border: `2px solid black`,
      padding: "0 4px",
      fontSize: "20px",
      color: "black",
    },
  }));
  const ctx = useContext(orderContext);
  const history = useHistory();
  const viewOrder = () => {
    history.push("/placeOrder");
  };

  return (
    <AppBar style={{ background: "#fff" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/home">
            <img style={{ height: "100px" }} src={logo1} alt="logo1" />
          </Link>
          <Link to="/home">
            <Typography
              variant="h3"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "black",
              }}
            >
              <strong>
                <i>CARTTRACTION</i>
              </strong>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to="/home">
                <Button
                  href="#"
                  sx={{ my: 2, color: "Black", display: "block" }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  href="#"
                  sx={{ my: 2, color: "Black", display: "block" }}
                >
                  About Us
                </Button>
              </Link>
              <Link to="/contactus">
                <Button
                  href="#"
                  sx={{ my: 2, color: "Black", display: "block" }}
                >
                  Contact Us
                </Button>
              </Link>
              <Button href="#" sx={{ my: 2, color: "Black", display: "block" }}>
                Hi,user
              </Button>
              <Button href="#" sx={{ my: 2, color: "Black", display: "block" }}>
                Logout
              </Button>
              <Button
                onClick={viewOrder}
                href="#"
                sx={{ my: 2, color: "Black", display: "block" }}
              >
                View Cart
              </Button>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "black",
            }}
          >
            CARTTRACTION
          </Typography>
          <Box
            className="boxClass"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/home">
              <Button
                className="buttonClass"
                href="#"
                sx={{ mx: 0, my: 2, color: "Black", display: "block" }}
              >
                <div style={{ fontSize: "18px" }}>
                  <b>Home</b>
                </div>
              </Button>
            </Link>
            <Link to="/about">
              <Button
                className="buttonClass"
                href="#"
                sx={{ mx: 3, my: 2, color: "Black", display: "block" }}
              >
                <div style={{ fontSize: "18px" }}>
                  <b>About Us</b>
                </div>
              </Button>
            </Link>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
              edge="end"
              sx={{ marginTop: "13px", mx: 5, width: "25px" }}
            >
              <div style={{ color: "black", fontSize: "18px" }}>
                <b>PRODUCTS</b>
              </div>
              <ArrowDropDown sx={{ color: "black" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to="/electronics">
                <div
                  style={{
                    fontSize: "20px",
                    color: "black",
                    border: "1px solid black",
                    margin: "2px",
                    marginTop: "0px",
                  }}
                >
                  Electronics
                </div>
              </Link>
              <Link to="/fashion">
                <div
                  style={{
                    fontSize: "20px",
                    color: "black",
                    border: "1px solid black",
                    margin: "2px",
                  }}
                >
                  Fashion
                </div>
              </Link>
              <Link to="/sports">
                <div
                  style={{
                    fontSize: "20px",
                    color: "black",
                    border: "1px solid black",
                    margin: "2px",
                  }}
                >
                  Sports
                </div>
              </Link>
              <Link to="/grocery">
                <div
                  style={{
                    fontSize: "20px",
                    color: "black",
                    border: "1px solid black",
                    margin: "2px",
                  }}
                >
                  Grocery
                </div>
              </Link>
            </Menu>
            <Button
              className="buttonClass"
              href="#"
              sx={{ mx: 8, my: 2, color: "Black", display: "block" }}
            >
              <div
                style={{ fontSize: "18px" }}
                onClick={() => {
                  history.push("/");
                }}
              >
                <b>Logout</b>
              </div>
            </Button>
            <Button
              onClick={viewOrder}
              className="buttonClass"
              sx={{ mx: 2, my: 2, color: "Black", display: "block" }}
            >
              <IconButton style={{ marginRight: "30px" }} aria-label="cart">
                <StyledBadge badgeContent={ctx.orderCount}>
                  <ShoppingCartIcon
                    style={{ color: "black", fontSize: "40px" }}
                  />
                </StyledBadge>
              </IconButton>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
