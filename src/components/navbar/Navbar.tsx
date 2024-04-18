import { MouseEvent, useState } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import styles from "./navbar.module.css";

function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  const screenMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters className={styles.toolbar}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Loader Animations
          </Typography>
          <div className={styles.actionBtnContainer}>
            {screenMd ? (
              <>
                <Tooltip title="Visit LinkedIn">
                  <IconButton
                    size="large"
                    aria-label="Visit LinkedIn"
                    color="inherit"
                    href="https://www.linkedin.com/in/sohil-gurung/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Visit Github">
                  <IconButton
                    size="large"
                    aria-label="Visit Github"
                    color="inherit"
                    href="https://github.com/sohil37"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Box className={styles.avatar}>
                  <Tooltip title="Sohil Gurung">
                    <Avatar
                      alt="Sohil Gurung Pic"
                      src="/facebookProfilePic.jpg"
                    />
                  </Tooltip>
                </Box>
              </>
            ) : (
              <>
                <Tooltip title="Sohil Gurung">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar
                      alt="Sohil Gurung Pic"
                      src="/facebookProfilePic.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      window.open(
                        "https://www.linkedin.com/in/sohil-gurung/",
                        "_blank"
                      );
                    }}
                  >
                    <Typography textAlign="center">LinkedIn</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      window.open("https://github.com/sohil37", "_blank");
                    }}
                  >
                    <Typography textAlign="center">Github</Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
