import MuiCheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { getPrice } from "../../lib/helpers";
import { CartContext } from "../CartContext";
import { Item } from "./Summary";
import Input from "./Input";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const PurchaseModal = observer(({ isOpen, onClose }: Props) => {
  const cart = useContext(CartContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (cart.items.length > 0) {
      const { item } = cart.items[0];
      setName(item.name);
      setPrice(item.price);
      setQuantity(cart.items[0].quantity);
      setMessage(message);
      setSrc(item.image.mobile.slice(1));
    }
  }, [cart.items]);

  const handleClick = () => {
    cart.resetCart();
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Container
        maxWidth="md"
        sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
      >
        <Card sx={{ paddingBlock: 2 }}>
          <CardContent>
            <Container>
              <Stack gap={3}>
                <CheckIcon />
                <Typography
                  variant="h4"
                  textTransform="uppercase"
                  fontWeight={600}
                >
                  THANK YOU FOR YOUR ORDER
                </Typography>
                <Typography variant="body1" color="GrayText" fontWeight={600}>
                  You will receive an email confirmation shortly.
                </Typography>
                <Input
                        {...cart.message}
                        label="message-input"
                        placeholder=""
                        type="text"
                        error={Boolean(false)}
                        helperText={"Write your message:"}
                      />
                <Paper sx={{ overflow: "hidden" }}>
                  <Grid container>
                    {/* --------------------- Left Side -------------------- */}
                    <Grid
                      item
                      xs={12}
                      md={7}
                      bgcolor="gray"
                      padding={3}
                      height="100%"
                      sx={{ bgcolor: "gray.main" }}
                    >
                      <Stack gap={2}>
                        <Box>
                          <Item
                            name={name}
                            price={price}
                            src={src}
                            quantity={quantity}
                          />
                        </Box>
                        {cart.items.length > 1 && (
                          <>
                            <Divider />
                            <Typography
                              variant="body1"
                              fontWeight={600}
                              color="GrayText"
                              textAlign="center"
                            >
                              And other {cart.items.length - 1} item(s)
                            </Typography>
                          </>
                        )}
                      </Stack>
                    </Grid>
                    {/* --------------------- Left Side -------------------- */}
                    {/* --------------------- Right Side ------------------- */}
                    <Grid
                      item
                      xs={12}
                      md
                      sx={{ bgcolor: "#000", padding: { xs: 3, lg: 0 } }}
                    >
                      <Stack
                        justifyContent="center"
                        height="100%"
                        sx={{ paddingLeft: { xs: 0, lg: 3 } }}
                      >
                        <Typography
                          variant="h6"
                          color="GrayText"
                          textTransform="uppercase"
                        >
                          Grand total
                        </Typography>
                        <Typography variant="h6" color="white" fontWeight={600}>
                          {getPrice(cart.total)}
                        </Typography>
                      </Stack>
                    </Grid>
                    {/* --------------------- Right Side ------------------- */}
                  </Grid>
                </Paper>
                <Button
                  variant="contained"
                  href="/"
                  onClick={handleClick}
                  sx={{ marginTop: 3 }}
                >
                  Back to Home
                </Button>
              </Stack>
            </Container>
          </CardContent>
        </Card>
      </Container>
    </Modal>
  );
});

export default PurchaseModal;

const CheckIcon = () => {
  return (
    <Stack
      alignSelf="start"
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
      padding="1.5rem"
      sx={{ bgcolor: "primary.light" }}
    >
      <MuiCheckIcon fontSize="large" sx={{ color: "#FFF" }} />
    </Stack>
  );
};
