import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Pokemon({ img, name, number, type, ability }) {
  return (
    <Box sx={{ minWidth: "250px" }}>
      <Box
        sx={{
          height: "250px",
          backgroundColor: "#616161",
        }}
      >
        <img src={img} width="100%" height="100%" />
      </Box>
      <Box className="short">
        <Box
          sx={{
            color: "white",
            height: "160px",
            width: "100%",
            backgroundColor: "#232323",
            paddingTop: "1em",
            paddingLeft: "1em",
          }}
        >
          <h3>{name}</h3>
        </Box>
      </Box>
      <Box
        className="full"
        sx={{
          height: "160px",
          backgroundColor: "#232323",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              color: "white",
              margin: "1em",
            }}
          >
            <h3>{name}</h3>
          </Box>
          <Box
            sx={{
              color: "white",
              margin: "1em",
            }}
          >
            <h3>{number}</h3>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              color: "white",
              margin: "1em",
              display: "flex",
              gap: "40px",
            }}
          >
            <Typography component="p" sx={{ fontSize: "0.75em" }}>
              Type
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}
            >
              {type.map((item) => {
                const color = () => {
                  if (item === "Fire") {
                    return "#F08030";
                  } else if (item === "Water") {
                    return "#6890F0";
                  } else if (item === "Grass") {
                    return "#78C850";
                  } else if (item === "Electric") {
                    return "#F8D030";
                  } else if (item === "Psychic") {
                    return "#F85888";
                  } else if (item === "Ice") {
                    return "#98D8D8";
                  } else if (item === "Dragon") {
                    return "#7038F8";
                  } else if (item === "Dark") {
                    return "#705848";
                  } else if (item === "Fairy") {
                    return "#EE99AC";
                  } else if (item === "Normal") {
                    return "#A8A878";
                  } else if (item === "Fighting") {
                    return "#C03028";
                  } else if (item === "Flying") {
                    return "#A890F0";
                  } else if (item === "Poison") {
                    return "#A040A0";
                  } else if (item === "Ground") {
                    return "#E0C068";
                  } else if (item === "Rock") {
                    return "#B8A038";
                  } else if (item === "Bug") {
                    return "#A8B820";
                  } else if (item === "Ghost") {
                    return "#705898";
                  } else if (item === "Steel") {
                    return "#B8B8D0";
                  }
                };
                return (
                  <Box
                    sx={{
                      display: "flex",
                      backgroundColor: color(),
                      width: "50px",
                      height: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "3px",
                    }}
                  >
                    {item}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              color: "white",
              margin: "1em",
              display: "flex",
              gap: "24px",
            }}
          >
            <Typography component="p" sx={{ fontSize: "0.75em" }}>
              Abilities
            </Typography>
            <Typography component="p" sx={{ fontSize: "0.75em" }}>
              {ability}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
