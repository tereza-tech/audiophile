import Typography from "@mui/material/Typography";
import { Product } from "../../lib/types";

type Props = {
  product: Product;
};

const FeaturesSection = ({ product }: Props) => {
  const { features } = product;
  const [firstParagraph, secondParagraph] = features.split(/\n\n/);

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        textTransform="uppercase"
        mb={{ xs: 1.5, sm: 2 }}
      >
        Features
      </Typography>
      <Typography
        variant="body1"
        color="GrayText"
        fontWeight={500}
        mb={{ xs: 2.5, sm: 3 }}
        letterSpacing="0.35px"
      >
        {firstParagraph}
      </Typography>
      <Typography
        variant="body1"
        color="GrayText"
        fontWeight={500}
        letterSpacing="0.35px"
      >
        {secondParagraph}
      </Typography>
    </div>
  );
};

export default FeaturesSection;
