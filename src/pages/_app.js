import "@/styles/globals.css";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: "url(body_bg.png)",
      }}
    >
      <Component {...pageProps} />
    </Box>
  );
}
