import Box from "@mui/material/Box";

export default function HeaderApp({ img }) {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        height: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <img src={img} />
    </Box>
  );
}
