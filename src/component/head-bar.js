import Bar from "@/component/bar-app";
import HeaderApp from "@/component/header-app";
import Box from "@mui/material/Box";

export default function HeadBar() {
  const head = [
    "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png",
    "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemoncenter-79x45.png",
    "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/corporate-en.png",
    "https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/sv01-gus-175-en.png",
    "https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/scarlet-violet-175x50-en.jpg",
    "https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/unite-176x50.jpg",
  ];
  const bar = [
    {
      name: "Home",
      color: "#919191",
      path: "/",
    },
    {
      name: "Pokédex",
      color: "#E3350D",
      path: "/pokedex",
    },
    {
      name: "Video Games & Apps",
      color: "#ee6b2f",
      path: "/video-games",
    },
    {
      name: "Trading Card Game",
      color: "#e6bc2f",
      path: "/trading-card-game",
    },
    {
      name: "Pokémon TV",
      color: "#4dad5b",
      path: "/pokemon-tv",
    },
    {
      name: "Play! Pokémon Events",
      color: "#30a7d7",
      path: "/play-pokemon-events",
    },
    {
      name: "News",
      color: "#1b53ba",
      path: "/news",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          height: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {head.map((img, index) => (
          <HeaderApp img={img} key={index} />
        ))}
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          height: "87px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {bar.map((text, index) => (
          <Bar
            name={text.name}
            color={text.color}
            path={text.path}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
}
