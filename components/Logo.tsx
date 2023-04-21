import MuiLink from "@mui/material/Link";
import Image from "next/image";
import NextLink from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <NextLink href="/" passHref>
      <MuiLink sx={{cursor: "pointer"}}>
        <Image
          src="/assets/shared/desktop/logo.png"
          width="183"
          height="50"
          alt="audiophile"
        />
      </MuiLink>
    </NextLink>
  );
};

export default Logo;
