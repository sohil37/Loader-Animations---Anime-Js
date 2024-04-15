import { Container, Grid } from "@mui/material";

import BarRandom1 from "./BarRandom1/BarRandom1";
import CircleLoop1 from "./CircleLoop1/CircleLoop1";
import CircleLoop2 from "./CircleLoop2/CircleLoop2";
import Loader from "./Loader";
import styles from "./loaders.module.css";
import SquareLoop1 from "./SquareLoop1/SquareLoop1";

function Loaders() {
  const blueColor = "#4285f4";
  const greenColor = "#34a853";
  const yellowColor = "#fbbc05";
  const redColor = "#ea4335";

  return (
    <Container className={styles.container}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Square Loop 1">
            <SquareLoop1
              squareSize={20}
              square1={{ color: blueColor }}
              square2={{ color: greenColor }}
              square3={{ color: yellowColor }}
              square4={{ color: redColor }}
            ></SquareLoop1>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Circle Loop 1">
            <CircleLoop1
              circleSize={20}
              circle1={{ color: blueColor }}
              circle2={{ color: greenColor }}
              circle3={{ color: yellowColor }}
              circle4={{ color: redColor }}
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
            ></CircleLoop2>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Bar Random 1">
            <BarRandom1
              barMaxHeight={80}
              barWidth={5}
              noOfBars={10}
              colors={[blueColor, greenColor, yellowColor, redColor]}
            ></BarRandom1>
          </Loader>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Loaders;
