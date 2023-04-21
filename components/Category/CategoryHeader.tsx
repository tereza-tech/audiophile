import { Box, Stack, Typography } from "@mui/material";

type Props = {
  category: "projectors" | "subwoofers" | "speakers" | "invisibass" | "rti" | "designspeakers";
};

const CategoryHeader = ({ category }: Props) => {
  return (
    <Box
      sx={{ backgroundColor: "gray.dark" }}
      marginTop={{ xs: "5.5625rem", md: "6.0625rem" }}
      marginBottom={{ xs: "4rem", md: "7.5rem", lg: "10rem" }}
      padding={{ xs: "2rem", md: "6.125rem" }}
    >
      <Stack justifyContent="center" alignItems="center">
        <Typography
          variant="h3"
          component="h1"
          textTransform="uppercase"
          color="white"
        >
          {category}
        </Typography>
      </Stack>
    </Box>
  );
};

export default CategoryHeader;