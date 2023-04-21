import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Controller, useWatch } from "react-hook-form";
import { CheckoutProps } from "../../lib/types";
import CheckoutSectionTitle from "./CheckoutSectionTitle";
import Input from "./Input";

const PaymentDetails = ({ control, errors }: CheckoutProps) => {
  const paymentMethod = useWatch({ control, name: "paymentMethod" });

  const styles = {
    "&.MuiFormControlLabel-root": {
      margin: 0,
      height: "60px",
    },
    "& input:checked": {
      border: "1px solid #000",
    },
  };

  return (
    <div>
      <CheckoutSectionTitle>Payment Details</CheckoutSectionTitle>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" fontWeight={600} mb={2}>
            Payment Method
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field} defaultValue="eMoney">
                <Stack gap={1.5}>
                  <FormControlLabel
                    sx={styles}
                    value="eMoney"
                    control={<Radio />}
                    label="eMoney"
                  />
                  <FormControlLabel
                    sx={styles}
                    value="COD"
                    control={<Radio />}
                    label="Cash on Delivery"
                  />
                </Stack>
              </RadioGroup>
            )}
          />
        </Grid>
        {paymentMethod === "eMoney" && (
          <Grid item xs={12}>
            <EMoneyDetails control={control} errors={errors} />
          </Grid>
        )}
        {paymentMethod === "COD" && (
          <Grid item xs={12}>
            <CashOnlyInfo />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default PaymentDetails;

const EMoneyDetails = ({ control, errors }: CheckoutProps) => {
  const { eMoneyNumber, eMoneyPin } = errors;

  return (
    <Grid container rowSpacing={2} columnSpacing={3} marginTop={2}>
      <Grid item xs={12} md={6}>
        <Controller
          name="eMoneyNumber"
          control={control}
          rules={{
            required: {
              value: true,
              message: "e-Money Number is required",
            },
            pattern: {
              value: /\d+/,
              message: "e-Money Number must be numeric",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="e-Money Number"
              placeholder="238521993"
              type="number"
              error={Boolean(eMoneyNumber)}
              helperText={eMoneyNumber?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="eMoneyPin"
          control={control}
          rules={{
            required: {
              value: true,
              message: "e-Money PIN is required",
            },
            pattern: {
              value: /\d+/,
              message: "e-Money PIN must be numeric",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="e-Money PIN"
              placeholder="6891"
              type="number"
              error={Boolean(eMoneyPin)}
              helperText={eMoneyPin?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

const CashOnlyInfo = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={{ xs: "center", sm: "start" }}
      columnSpacing={3}
      rowSpacing={1}
      marginTop={3}
    >
      <Grid item xs="auto">
        <Image
          src="/assets/shared/desktop/cash-icon.png"
          width="48px"
          height="48px"
          alt="Cash only"
        />
      </Grid>
      <Grid item xs={10}>
        <Typography
          variant="body1"
          color="GrayText"
          letterSpacing="1px"
          maxWidth="70ch"
          textAlign={{ xs: "center", sm: "left" }}
        >
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </Typography>
      </Grid>
    </Grid>
  );
};
