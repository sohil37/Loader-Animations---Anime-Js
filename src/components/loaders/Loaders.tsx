import { Card, Container, Grid } from "@mui/material";

import ColoredSquareLoop from "./coloredSquareLoop/ColoredSquareLoop";
import Loader from "./Loader";
import styles from "./loaders.module.css";

function Loaders() {
  const blueColor = "#4285f4";
  const greenColor = "#34a853";
  const yellowColor = "#fbbc05";
  const redColor = "#ea4335";

  return (
    <Container className={styles.container}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}>
          <Loader title="Coloured Square Loop">
            <ColoredSquareLoop
              squareSize={20}
              square1={{ color: blueColor }}
              square2={{ color: greenColor }}
              square3={{ color: yellowColor }}
              square4={{ color: redColor }}
            ></ColoredSquareLoop>
          </Loader>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant="outlined" className={styles.card}>
            Hi
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant="outlined" className={styles.card}>
            Hi
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card variant="outlined" className={styles.card}>
            Hi
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Loaders;
