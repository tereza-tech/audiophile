import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import Links from "../Links";
import Logo from "../Logo";

const Footer = () => {
  const isTablet = useMediaQuery("(min-width: 900px)");

  const containerStyles = {
    paddingBlock: "3.25rem 2.375rem",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      height: "4px",
      width: "101px",
      backgroundColor: "primary.main",
      left: { xs: "50%", md: "24px" },
      transform: { xs: "translateX(-50%)", md: "none" },
    },
  };

  return (
    <Box
      marginTop={{ xs: "7.5rem", md: "6rem", lg: "12.5rem" }}
     sx={{ backgroundColor: "gray.dark", color: "GrayText" }}
    >
      <Container sx={containerStyles}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "start" }}
          textAlign={{ xs: "center", md: "left" }}
          spacing={5}
        >
          <Grid item xs={12} md={6} order={1} position="relative">
            <Logo />
          </Grid>
          <Grid item xs={12} md={6} order={2}>
            <Links
              flexDirection={isTablet ? "row" : "column"}
              justifyContent={isTablet ? "end" : "start"}
            />
          </Grid>
          <Grid item xs={12} md={6} order={3}>
            <Typography variant="body1" color="GrayText">
              MT Distributing is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={isTablet ? 5 : 4}>
            <Typography variant="body2" color="GrayText">
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} order={isTablet ? 4 : 5}>
            <SocialMediaLinks />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

const SocialMediaLinks = () => {
  const SOCIAL_MEDIA = [
    {
      href: "https://www.facebook.com/profile.php?id=100012707850259",
      icon: (
        <FacebookIcon
          fontSize="large"
          sx={{
            color: "#FFF",
            transition: "all 0.25s",
            "&:hover": { color: "primary.main" },
          }}
        />
      ),
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/ayanori.toyoda/",
      icon: (
        <InstagramIcon
          fontSize="large"
          sx={{
            color: "#FFF",
            transition: "all 0.25s",
            "&:hover": { color: "primary.main" },
          }}
        />
      ),
      label: "Instagram",
    },
    {
      href: "https://github.com/AyanorII",
      icon: (
        <GitHubIcon
          fontSize="large"
          sx={{
            color: "#FFF",
            transition: "all 0.25s",
            "&:hover": { color: "primary.main" },
          }}
        />
      ),
      label: "GitHub",
    },
  ];

  return (
    <Stack
      flexDirection="row"
      gap={1}
      justifyContent={{ xs: "center", md: "end" }}
      alignItems={{ lg: "center" }}
      height="100%"
    >
      {SOCIAL_MEDIA.map((link) => {
        const { href, icon, label } = link;

        return (
          <Link key={href} href={href}>
            <a aria-label={label}>{icon}</a>
          </Link>
        );
      })}
    </Stack>
  );
};
