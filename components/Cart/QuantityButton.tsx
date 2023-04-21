import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Product } from "../../lib/types";
import { CartContext } from "../CartContext";

type Props = {
  quantity?: number;
  product: Product;
};

const QuantityButton = observer(({ quantity, product }: Props) => {
  const cart = useContext(CartContext);

  const [qty, setQty] = useState(quantity || 1);

  const handleAdd = () => {
    if (quantity) {
      cart.addItem(product, 1);
    }
    setQty(qty + 1);
  };

  const handleRemove = () => {
    if (quantity) {
      cart.removeItem(product);
    }
    setQty(qty === 1 ? 1 : qty - 1);
  };

  const style = {
    backgroundColor: "gray.light",
    width: {xs: "38px", sm: "42px"},
    minWidth: "38px !important",
    padding: "0.5rem",
    borderColor: "gray.light",
    "&:hover": { backgroundColor: "gray.main", color: "gray.dark" },
  };

  return (
    <Stack gap={2} flexDirection="row">
      <Stack flexDirection="row">
        <Button variant="outlined" sx={style} onClick={handleRemove}>
          <RemoveIcon fontSize="small" />{" "}
        </Button>
        <Box
          sx={{
            width: "35px",
            display: "grid",
            placeItems: "center",
            backgroundColor: "gray.light",
          }}
        >
          {qty}
        </Box>
        <Button variant="outlined" sx={style} onClick={handleAdd}>
          <AddIcon fontSize="small" />
        </Button>
      </Stack>
      {!quantity && (
        <Button variant="contained" onClick={() => cart.addItem(product, qty)}>
          Add to cart
        </Button>
      )}
    </Stack>
  );
});

export default QuantityButton;
