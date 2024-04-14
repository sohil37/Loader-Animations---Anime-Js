import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ my: 2 }}>
            Loaders
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
