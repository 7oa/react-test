import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import _TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Paper = styled(_Paper)`
  padding: 30px;
  width: 800px;
  margin: 30px auto 0;
  box-sizing: border-box;
`;

const TextField = styled(_TextField)`
  width: 40%;
`;

const MemeWrapper = styled.div`
  position: relative;
  margin: 30px auto;
  text-align: center;
`;

const MemeImg = styled.img`
  max-width: 100%;
`;

const MemeTop = styled.div`
  position: absolute;
  top: 5%;
  text-align: center;
  width: 80%;
  font-family: impact, sans-serif;
  text-transform: uppercase;
  color: white;
  font-size: 50px;
  margin: 0 auto;
  right: 0;
  left: 0;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`;

const MemeBottom = styled.div`
  position: absolute;
  bottom: 5%;
  text-align: center;
  width: 80%;
  font-family: impact, sans-serif;
  text-transform: uppercase;
  color: white;
  font-size: 50px;
  margin: 0 auto;
  right: 0;
  left: 0;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`;

function MemeGenerator() {
  const [topText, setTopText] = useState(""),
    [bottomText, setBottomText] = useState(""),
    [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg"),
    [allImg, setAllImg] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        setAllImg({ memes });
      });
  });

  const genMeme = event => {
    event.preventDefault();
    let randomInt = Math.floor(Math.random() * allImg.memes.length);
    setRandomImg(allImg.memes[randomInt].url);
  };

  return (
    <Paper>
      <form onSubmit={genMeme}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <TextField
            margin="dense"
            variant="outlined"
            name="topText"
            label="Add top text"
            type="text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
          <TextField
            margin="dense"
            variant="outlined"
            name="bottomText"
            label="Add bottom text"
            type="text"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Generate
          </Button>
        </Grid>
      </form>
      <MemeWrapper>
        <MemeImg src={randomImg} alt="" />
        <MemeTop>{topText}</MemeTop>
        <MemeBottom>{bottomText}</MemeBottom>
      </MemeWrapper>
    </Paper>
  );
}

export default MemeGenerator;
