import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Bar({ name, color, path }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(path);
  };
  const handleHover = useMemo(() => {
    return path === router.pathname;
  }, [path, router.pathname]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        ":last-child": {
          ".btmbar": {
            borderBottomRightRadius: "10px",
          },
        },
        ":first-child": {
          ".btmbar": {
            borderBottomLeftRadius: "10px",
          },
        },
      }}
    >
      <Box
        onClick={handleClick}
        sx={{
          backgroundColor: "white",
          height: "87px",
          width: "128px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "black",
          ":hover": {
            cursor: "pointer",
            backgroundColor: color,
            color: "white",
          },
          ...(handleHover && {
            backgroundColor: color,
            color: "white",
          }),
        }}
      >
        <div>{name}</div>
      </Box>
      <Box
        className="btmbar"
        sx={{
          position: "absolute",
          bottom: "-6px",
          height: "6px",
          width: "128px",
          backgroundColor: color,
        }}
      />
    </Box>
  );
}
