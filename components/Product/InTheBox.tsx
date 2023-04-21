import { List, ListItem, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Product } from "../../lib/types";

type Props = {
  product: Product;
};

const InTheBox = ({ product }: Props) => {
  const { includes } = product;
  return (
    <Stack
      flexDirection={{ sm: "row", lg: "column" }}
      justifyContent="space-between"
      width="100%"
    >
      <Typography
        variant="h4"
        component="h2"
        textTransform="uppercase"
        marginBottom={1}
      >
        In the box
      </Typography>
      <List sx={{ paddingTop: { sm: 0 } }}>
        {includes.map((item, index) => {
          const { quantity, item: includeItem } = item;

          return (
            <ListItem key={index} sx={{ paddingLeft: 0 }}>
              <Typography
                variant="body1"
                component="span"
                color="primary"
                fontWeight={600}
                mr={2}
              >
                {quantity}x
              </Typography>
              <Typography variant="body1" color="GrayText">
                {includeItem}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default InTheBox;
