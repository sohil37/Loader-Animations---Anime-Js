import { Card, Divider, Typography } from "@mui/material";

import styles from "./loader.module.css";

function Loader(props: { children: JSX.Element; title: string }) {
  return (
    <Card variant="outlined" className={styles.card}>
      <Typography variant="button" fontSize={"1rem"}>
        {props.title}
      </Typography>
      <Divider></Divider>
      <div className={styles.loader}>{props.children}</div>
    </Card>
  );
}

export default Loader;
