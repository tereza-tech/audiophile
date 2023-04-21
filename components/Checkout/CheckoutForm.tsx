import { Stack } from "@mui/material";
import { Control, FieldErrors } from "react-hook-form";
import { Checkout } from "../../lib/types";
import BillingDetails from "./BillingDetails";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";

type Props = {
  control: Control<Checkout, object>;
  errors: FieldErrors<Checkout>;
};

const CheckoutForm = ({control, errors}: Props) => {
  return (
    <Stack gap={{ xs: 4, sm: 6 }}>
      <BillingDetails control={control} errors={errors} />
      <ShippingInfo control={control} errors={errors} />
      <PaymentDetails control={control} errors={errors} />
    </Stack>
  );
};

export default CheckoutForm;
