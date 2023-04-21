import { Typography } from "@mui/material";

type Props = {
  children: string;
};

const CheckoutSectionTitle = ({ children }: Props) => {
  return (
    <Typography
      variant="body1"
      fontWeight={700}
      color="primary"
      textTransform="uppercase"
      letterSpacing="0.75px"
      mb={3}
    >
      {children}
    </Typography>
  );
};

export default CheckoutSectionTitle;
