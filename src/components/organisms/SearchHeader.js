import React from "react";
import Text from "../atoms/Text";
import InputBox from "../atoms/InputBox";
import MainButton from "../atoms/MyButton";
import Grid from "@mui/material/Grid";

const SearchHeader = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#eeeeee",
          justifyContent: "center",
          padding: "30px 0 45px",
        }}
      >
        <Grid
          container
          item
          xs={12}
          style={{
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={5}>
            <InputBox placeholder={"search for a city"} />
          </Grid>
          <Grid item xs={1}>
            <MainButton color="#fff" text={"search"} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchHeader;
