import { Card, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import styles from "./loader.module.css";

function Loader(props: { children: JSX.Element; title: string }) {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  }));

  return (
    <Card variant="outlined" className={styles.card}>
      <StyledTypography variant="button" className={styles.title}>
        {props.title}
      </StyledTypography>
      <Divider></Divider>
      <div className={styles.loader}>{props.children}</div>
    </Card>
  );
}

export default Loader;
