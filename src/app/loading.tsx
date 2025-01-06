import { Skeleton } from "@mui/material";

export default function Loading() {
  // loading skeleton component
  return (
    <Skeleton
      variant="rectangular"
      width={"100%"}
      height={"30px"}
      sx={{ borderRadius: "8px" }}
    />
  );
}
