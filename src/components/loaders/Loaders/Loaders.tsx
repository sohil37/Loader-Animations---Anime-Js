import { Container, Grid } from "@mui/material";

import BarRandom1 from "../BarRandom1/BarRandom1";
import BarWave1 from "../BarWave1/BarWave1";
import CircleLoop1 from "../CircleLoop1/CircleLoop1";
import CircleLoop2 from "../CircleLoop2/CircleLoop2";
import CircleLoop3 from "../CircleLoop3/CircleLoop3";
import CircleLoop4 from "../CircleLoop4/CircleLoop4";
import CircleLoop5 from "../CircleLoop5/CircleLoop5";
import CircleLoop6 from "../CircleLoop6/CircleLoop6";
import CircleLoop7 from "../CircleLoop7/CircleLoop7";
import CircleLoop8 from "../CircleLoop8/CircleLoop8";
import LineDrawing1 from "../LineDrawing1/LineDrawing1";
import Loader from "../Loader/Loader";
import SquareLoop1 from "../SquareLoop1/SquareLoop1";
import styles from "./loaders.module.css";

function Loaders() {
  const blueColor = "#4285f4";
  const greenColor = "#34a853";
  const yellowColor = "#fbbc05";
  const redColor = "#ea4335";

  return (
    <Container className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 1">
            <CircleLoop1
              circleSize={20}
              circle1={{ color: blueColor }}
              circle2={{ color: greenColor }}
              circle3={{ color: yellowColor }}
              circle4={{ color: redColor }}
              easing="easeInOutExpo"
            ></CircleLoop1>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 2">
            <CircleLoop2
              circleSize={20}
              circle1={{ color: blueColor }}
              circle2={{ color: greenColor }}
              circle3={{ color: yellowColor }}
              circle4={{ color: redColor }}
              easing="linear"
            ></CircleLoop2>
          </Loader>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 3">
            <CircleLoop3
              circleSize={50}
              circle1Color={blueColor}
              circle2Color={greenColor}
              circle3Color={yellowColor}
              circleBorderWidth={5}
              easing="linear"
            ></CircleLoop3>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 4">
            <CircleLoop4
              circleSize={20}
              circle1Color={blueColor}
              circle2Color={greenColor}
              circle3Color={yellowColor}
              circle4Color={redColor}
              revolutionSize={30}
              easing="linear"
            ></CircleLoop4>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 5">
            <CircleLoop5
              circleSize={50}
              circleColor={blueColor}
              circleBorderWidth={5}
              easing="linear"
            ></CircleLoop5>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 6">
            <CircleLoop6
              circleMinSize={10}
              circleMaxSize={65}
              circleColor={blueColor}
              circleBorderWidth={3}
              easing="easeOutSine"
            ></CircleLoop6>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 7">
            <CircleLoop7
              circleSize={15}
              circle1Color={blueColor}
              circle2Color={greenColor}
              circle3Color={yellowColor}
              circle4Color={redColor}
              easing="linear"
            ></CircleLoop7>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 8">
            <CircleLoop8
              centreCircle={{ color: redColor, size: 10 }}
              eclipse={{
                eclipse1: { color: yellowColor, borderWidth: 4, size: 70 },
                eclipse2: { color: blueColor, borderWidth: 4, size: 70 },
                eclipse3: { color: greenColor, borderWidth: 4, size: 70 },
              }}
              easing="linear"
            ></CircleLoop8>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Square Loop 1">
            <SquareLoop1
              squareSize={20}
              square1={{ color: blueColor }}
              square2={{ color: greenColor }}
              square3={{ color: yellowColor }}
              square4={{ color: redColor }}
              easing="easeInOutExpo"
            ></SquareLoop1>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Bar Random 1">
            <BarRandom1
              barMaxHeight={80}
              barWidth={5}
              noOfBars={10}
              colors={[blueColor, greenColor, yellowColor, redColor]}
              easing="linear"
            ></BarRandom1>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Bar Wave 1">
            <BarWave1
              barMaxHeight={80}
              barWidth={5}
              noOfBars={10}
              colors={[blueColor, greenColor, yellowColor, redColor]}
              easing="linear"
            ></BarWave1>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Line Drawing 1">
            <LineDrawing1
              borderColor={blueColor}
              correctPathColor={blueColor}
              dividerColor={blueColor}
              size={75}
              easing="easeInOutSine"
            ></LineDrawing1>
          </Loader>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Loaders;
