import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import CategoryLinks from "../Category/CategoryLinks";
import Links from "../Links";
import Logo from "../Logo";
import CartButton from "./CartButton";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowY = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const drawerStyles = {
    display: { lg: "none" },

    "& .MuiPaper-elevation": {
      top: "89px",
    },
  };

  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "gray.dark",
          paddingBlock: "1rem",
          borderBottom: "1px solid #FFFFFF25",
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              onClick={toggleDrawer}
              sx={{ display: { lg: "none" } }}
              aria-label="menu button"
            >
              <MenuIcon sx={{ color: "#FFF" }} />
            </IconButton>
            <Logo />
            {isDesktop && <Links />}
            <CartButton />
          </Toolbar>
        </Container>
        <Drawer
          open={drawerOpen}
          anchor="top"
          onClose={closeDrawer}
          sx={{
            ...drawerStyles,
            "& .MuiContainer-root": { paddingBottom: "9rem" },
          }}
        >
          <CategoryLinks />
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
