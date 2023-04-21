import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: Props) => {
  const linkStyles = {
    transition: "all 0.25s",
    color: "#FFF",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "0.8125rem",
    letterSpacing: "2px",
    cursor: "pointer",
    "&:hover": { color: "primary.main" },
  };

  return (
    <NextLink href={href}>
      <MuiLink sx={linkStyles} href={href}>{children}</MuiLink>
    </NextLink>
  );
};

export default Link;
