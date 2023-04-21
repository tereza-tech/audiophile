import { Grid} from "@mui/material";
import { Controller } from "react-hook-form";
import { CheckoutProps } from "../../lib/types";
import CheckoutSectionTitle from "./CheckoutSectionTitle";
import Input from "./Input";

const ShippingInfo = ({ control, errors }: CheckoutProps) => {
  const { address, zip, city, country } = errors;

  return (
    <div>
      <CheckoutSectionTitle>Shipping Info</CheckoutSectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            name="address"
            control={control}
            rules={{
              required: { value: true, message: "Address is required" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Your Address"
                placeholder="1138 Williams Avenue"
                error={Boolean(address)}
                helperText={address?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="zip"
            control={control}
            rules={{
              required: { value: true, message: "ZIP Code is required" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="ZIP Code"
                placeholder="10001"
                error={Boolean(zip)}
                helperText={zip?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="city"
            control={control}
            rules={{
              required: { value: true, message: "City is required" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="City"
                placeholder="New York"
                error={Boolean(city)}
                helperText={city?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="country"
            control={control}
            rules={{
              required: { value: true, message: "Country is required" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Country"
                placeholder="United States"
                error={Boolean(country)}
                helperText={country?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShippingInfo;
