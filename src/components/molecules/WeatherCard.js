import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Cloud from "../../resources/cloud.jpeg";
import { AiOutlineCloud } from "react-icons/ai";

const WeatherCard = (props) => {
  const {} = props;
  return (
    <div style={{ margin: "15px 5px" }}>
      <Card sx={{ maxWidth: 250, maxHeight: 330 }}>
        <div>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={Cloud}
          />
          <div
            style={{
              margin: "-30px 0px  1px",
              display: "flex",
            }}
          >
            <AiOutlineCloud
              style={{
                margin: "-25px  10px ",
                height: 60,
                width: 60,
                color: "#fff",
              }}
            />
            <Typography variant="body2" color="text.secondary">
              Cloudy
            </Typography>
          </div>
        </div>

        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            40<sup>0</sup>C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lagos, NG
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            Min 40<sup>0</sup>C - Max 40<sup>0</sup>C
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More</Button>
          <Button size="small">Close</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default WeatherCard;
