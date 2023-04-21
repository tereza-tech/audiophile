import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import PurchaseModal from "../components/Checkout/PurchaseModal";
import Summary from "../components/Checkout/Summary";
import GoBack from "../components/GoBack";
import Head from "../components/Head";
import { Checkout as CheckoutType } from "../lib/types";

const Checkout: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      paymentMethod: "eMoney",
      eMoneyNumber: "",
      eMoneyPin: "",
    } as CheckoutType,
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSubmit = () => handleOpen();

  return (
    <>
      <Head title="Checkout | MT Distributing" />
      <PurchaseModal isOpen={open} onClose={handleClose} />
      <Box
        sx={{ bgcolor: "gray.main" }}
        marginBottom={{ xs: "-7.5rem", lg: "-12.5rem" }}
        paddingBottom={{ xs: "7.5rem", lg: "12.5rem" }}
      >
        <Container>
          <GoBack />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} position="relative">
              <Grid item xs={12} md={8}>
                <Card
                  elevation={0}
                  sx={{ borderRadius: 3, bgcolor: "background.paper" }}
                >
                  <CardContent sx={{ padding: { xs: 3, sm: 5 } }}>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      textTransform="uppercase"
                      mb={{ xs: "2rem", sm: "2.625rem" }}
                    >
                      Checkout
                    </Typography>
                    <CheckoutForm control={control} errors={errors} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box position="sticky" top="150px">
                  <Summary />
                </Box>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Checkout;
