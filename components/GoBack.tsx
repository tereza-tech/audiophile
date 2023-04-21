import { Button } from "@mui/material";
import { useRouter } from "next/router";

const GoBack = () => {
  const router = useRouter();

  return (
    <Button
      variant="text"
      onClick={() => router.back()}
      sx={{
        marginTop: { xs: "6.625rem", md: "7.5rem" },
        color: "GrayText",
        textTransform: "capitalize",
        fontWeight: "medium",
        fontSize: "1rem",
        paddingLeft: 0,
        marginBottom: { xs: "1.5rem", lg: "3.5rem" },
        "&:hover": {
          backgroundColor: "transparent",
          color: "primary.main",
        },
      }}
    >
      Go Back
    </Button>
  );
};

export default GoBack;
