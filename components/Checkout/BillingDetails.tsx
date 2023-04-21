import { Grid } from "@mui/material";
import { Controller } from "react-hook-form";
import { CheckoutProps } from "../../lib/types";
import CheckoutSectionTitle from "./CheckoutSectionTitle";
import Input from "./Input";

const BillingDetails = ({ control, errors }: CheckoutProps) => {
  const { name, email, phone } = errors;

  return (
    <div>
      <CheckoutSectionTitle>Billing Details</CheckoutSectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Controller
            name="name"
            control={control}
            rules={{ required: { value: true, message: "Name is required" } }}
            render={({ field }) => {
              return (
                <Input
                  {...field}
                  label="Name"
                  placeholder="Alexei Pupkin"
                  error={Boolean(name)}
                  helperText={name?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email is invalid",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Email Address"
                type="email"
                placeholder="alexei@mail.com"
                error={Boolean(email)}
                helperText={email?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: { value: true, message: "Phone number is required" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Phone Number"
                placeholder="+1 202-555-0136"
                error={Boolean(phone)}
                helperText={phone?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BillingDetails;
