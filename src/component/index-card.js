import { Box } from "@mui/material";

export default function Card({
  w,
  h_img,
  h_txt,
  img,
  color,
  title,
  subtitle,
  sub_color,
  h_color,
  control,
  w_img,
}) {
  return (
    <Box
      sx={{
        width: w,
        borderRadius: "5px",
        overflow: "hidden",
        display: "flex",
        flexDirection: control,
      }}
    >
      <Box height={h_img} width={w_img}>
        <img
          src={img}
          height="100%"
          width={w_img ? w_img : "100%"}
          layout="responsive"
          objectFit="contain"
        />
      </Box>
      <Box
        sx={{
          backgroundColor: color,
          height: h_txt,
          padding: "0.25em 0 1.5em 0",
        }}
      >
        <Box
          sx={{
            color: h_color,
            margin: "0.75em 0.5em 0em 1em",
          }}
        >
          <h3>{title}</h3>
        </Box>
        <Box
          sx={{
            color: sub_color,
            margin: "1em",
          }}
        >
          {subtitle}
        </Box>
      </Box>
    </Box>
  );
}
