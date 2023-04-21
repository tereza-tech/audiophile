import { Box, Card, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CategoryLink as CategoryLinkType } from "../../lib/types";

type Props = {
  category: CategoryLinkType;
};

const CategoryLink = ({ category }: Props) => {
  const { category: type, href, image } = category;

  const isTablet = useMediaQuery("(min-width: 900px)");

  return (
    <Link href={href} passHref style={{ cursor: "pointer" }}>
      <Card
        elevation={0}
        sx={{
          backgroundColor: "gray.main",
          borderRadius: "8px",
          position: "relative",
          paddingBlock: { xs: "65px 22px", md: "80px 32px" },
          overflow: "visible",
        }}
      >
        <Stack
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
        >
          <Box position="absolute" top={isTablet ? "-72px" : "-32px"}>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={type}
            />
          </Box>
          <Typography
            variant="body1"
            textTransform="uppercase"
            fontWeight="600"
            letterSpacing="1.07px"
            marginBottom={1}
          >
            {type}
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color="GrayText"
            textTransform="uppercase"
            fontWeight="600"
            sx={{
              position: "relative",
              "&:after": {
                content: "url('/assets/shared/desktop/icon-arrow-right.svg')",
                position: "absolute",
                top: "0",
                right: "-20px",
              },
            }}
          >
            Shop
          </Typography>
        </Stack>
      </Card>
    </Link>
  );
};

export default CategoryLink;
