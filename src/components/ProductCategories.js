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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <Link to="/electronics">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={electronics}
                  alt="electronics"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Electronics
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item>
            <Link to="/fashion">
              <Card sx={{ maxWidth: 285, marginBottom: "2px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={clothing}
                  alt="clothing"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Fashion
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link to="/sports">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={sports}
                  alt="sports"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sports
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link to="/grocery">
              <Card sx={{ maxWidth: 420 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={groceries}
                  alt="groceries"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Groceries
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
