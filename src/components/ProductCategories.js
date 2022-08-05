import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import clothing from "../images/clothing.jpg";
import groceries from "../images/groceries.jpg";
import electronics from "../images/Electronics.jpg";
import sports from "../images/sports.jpg";

import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <Link to="/electronics">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>Electronics</strong>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={electronics}
                  alt="electronics"
                />
              </Card>
            </Link>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item>
            <Link to="/fashion">
              <Card sx={{ maxWidth: 285, marginBottom: "2px" }}>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>Fashion</strong>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={clothing}
                  alt="clothing"
                  marginRight= "0px"
                  
                />
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Fashion
                  </Typography>
                </CardContent> */}
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link to="/sports">
              <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>Sports</strong>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={sports}
                  alt="sports"
                />
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sports
                  </Typography>
                </CardContent> */}
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link to="/grocery">
              <Card sx={{ maxWidth: 420 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <strong>Groceries</strong>
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={groceries}
                  alt="groceries"
                />
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Groceries
                  </Typography>
                </CardContent> */}
              </Card>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
