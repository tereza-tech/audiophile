import { Grid, InputBase, Typography } from "@mui/material";
import { forwardRef } from "react";

type Props = {
  type?: string;
  error: boolean;
  label: string;
  placeholder: string;
  helperText?: string;
};

const Input = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => {
  const { type, error, label, placeholder, helperText, ...rest } = props;
  return (
    <Grid container justifyContent="space-between" spacing={1}>
      <Grid item xs={6}>
        <Typography
          variant="body2"
          component="label"
          fontWeight={600}
          color={error ? "error.main" : "text.primary"}
        >
          {label}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        {error && (
          <Typography
            variant="body2"
            color="error"
            fontWeight={600}
            textAlign="right"
          >
            {helperText}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        <InputBase
          {...rest}
          placeholder={placeholder}
          type={type}
          error={error}
          fullWidth
          ref={ref}
        />
      </Grid>
    </Grid>
  );
})

Input.displayName = "Input";

export default Input;
