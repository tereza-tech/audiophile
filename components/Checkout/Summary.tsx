import { Box, Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useContext } from "react";
import { getPrice, getShortName } from "../../lib/helpers";
import { CartContext } from "../CartContext";

const Summary = observer(() => {
  const store = useContext(CartContext);
  const { items, total } = store;

  return (
    <Card elevation={0}>
      <CardContent>
        <Stack gap={3}>
          <Typography variant="h6" fontWeight={600} textTransform="uppercase">
            Summary
          </Typography>
          <Stack gap={2}>
            {items.map((item) => {
              const { image, name, id, price } = item.item;
              const { quantity } = item;
              const src = image.mobile.slice(1);

              return (
                <Item
                  key={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                  src={src}
                />
              );
            })}
          </Stack>
          <Total total={total} />
          <Button variant="contained" type="submit">
            Continue & pay
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
});

export default Summary;

type ItemProps = {
  src: string;
  name: string;
  price: number;
  quantity: number;
};

export const Item = ({ src, name, price, quantity }: ItemProps) => {
  return (
    <Grid container alignItems="center" columnSpacing={2}>
      {/* ------------------------ Image ------------------------- */}
      <Grid item xs="auto">
        <Box
          borderRadius={2}
          overflow="hidden"
          position="relative"
          width="64px"
          height="64px"
        >
          <Image src={src} layout="fill" alt={name} />
        </Box>
      </Grid>
      {/* ------------------------ Image ------------------------- */}
      {/* --------------------- Name / Price --------------------- */}
      <Grid item xs>
        <Stack gap={0.5}>
          <Typography variant="body1" fontWeight={600}>
            {getShortName(name)}
          </Typography>
          <Typography variant="body2" color="GrayText" fontWeight={600}>
            {getPrice(price)}
          </Typography>
        </Stack>
      </Grid>
      {/* --------------------- Name / Price --------------------- */}
      {/* ----------------------- Quantity ----------------------- */}
      <Grid item xs="auto" justifySelf="end">
        <Typography variant="body1" color="GrayText" fontWeight={600}>
          x{quantity}
        </Typography>
      </Grid>
      {/* ----------------------- Quantity 1----------------------- */}
    </Grid>
  );
};

type TotalProps = {
  total: number;
};

const Total = ({ total }: TotalProps) => {
  const VAT = total * 0.2;
  const SHIPPING_COST = 50;

  const grandTotal = total + VAT + SHIPPING_COST;

  return (
    <Stack textTransform="uppercase" gap={0.5}>
      {/* ---------------------------- Total ------------------------------- */}
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2" color="GrayText" fontWeight={600}>
          Total
        </Typography>
        <Typography variant="body1" fontWeight={600}>
          {getPrice(total)}
        </Typography>
      </Stack>
      {/* ---------------------------- Total ------------------------------- */}
      {/* --------------------------- Shipping ----------------------------- */}
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2" color="GrayText" fontWeight={600}>
          Shipping
        </Typography>
        <Typography variant="body1" fontWeight={600}>
          {getPrice(50)}
        </Typography>
      </Stack>
      {/* --------------------------- Shipping ----------------------------- */}
      {/* ----------------------------- VAT -------------------------------- */}
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2" color="GrayText">
          VAT (included)
        </Typography>
        <Typography variant="body1" fontWeight={600}>
          {getPrice(VAT)}
        </Typography>
      </Stack>
      {/* ----------------------------- VAT -------------------------------- */}
      {/* -------------------------- Grand Total --------------------------- */}
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
      >
        <Typography variant="body2" color="GrayText" fontWeight={600}>
          Grand Total
        </Typography>
        <Typography variant="body1" fontWeight={600} color="primary">
          {getPrice(grandTotal)}
        </Typography>
      </Stack>
      {/* -------------------------- Grand Total --------------------------- */}
    </Stack>
  );
};
