import HeadBar from "@/component/head-bar";
import Card from "@/component/index-card";
import Pokemon from "@/component/index-pokemon";
import { WebName } from "@/component/webname";
import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      // style={{ ...style, display: "block" }}
      onClick={onClick}
      sx={{
        backgroundColor: "red !important",
        width: "100px !important",
        height: "100px !important",

        "::before": {
          content: '"none !important"',
        },
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      sx={{
        backgroundColor: "red !important",
        width: "100px !important",
        height: "100px !important",
        zIndex: 99,
        ":before": {
          content: "unset",
        },
      }}
    />
  );
}

export default function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4.3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <WebName wname="pokemon">
      <HeadBar />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            backgroundImage: "url(container_bg.png)",
            height: "100%",
            width: "1280px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 99,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              height: "100%",
              width: "1024px",
              color: "black",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              padding: "25px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Card
                w="578px"
                h_img="327px"
                img="sv035-announce-169-en.png"
                h_txt="132px"
                color="#ff90c4"
                h_color="white"
                control="column"
                title="Gotta Catch 'Em All"
                subtitle={
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "'Roboto',arial,sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Meet the OG 151 Pokémon in the Pokémon TCG:
                    <em> Scarlet & Violet—151 </em> expansion.
                  </Typography>
                }
                sub_color="#c3005b"
              />
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  width: "578px",
                }}
              >
                <Card
                  w="50%"
                  h_img="158px"
                  img="pokemon-center-169.png"
                  h_txt="95px"
                  color="#E3350D"
                  h_color="white"
                  control="column"
                  title="It’s Rocket Fashion, Not Rocket Science"
                />
                <Card
                  w="50%"
                  h_img="158px"
                  img="team-rocket-169.png"
                  h_txt="95px"
                  color="#8b8b8b"
                  h_color="black"
                  control="column"
                  title="Pokémon Villains Make It Work"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Card
                w="281px"
                h_img="159px"
                img="scarlet-violet-169-en.png"
                h_txt="149px"
                color="#282828"
                control="column"
                h_color="white"
                title="Seek Out Chesnaught, Great Tusk, and Iron Treads at Tera Raid Crystals across Paldea"
              />
              <Card
                w="281px"
                h_img="150px"
                img="pokemon-go-34.png"
                h_txt="150px"
                color="#369143"
                control="row"
                h_color="white"
                title="Pokémon GO’s Solstice Horizons"
                w_img="112px"
              />
              <Card
                w="281px"
                h_img="159px"
                img="movie01-on-ptv-169-en.png"
                h_txt="95px"
                color="#975fe2"
                h_color="white"
                control="column"
                title="Watch Mewtwo’s Origin Story on Pokémon TV"
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",

              ".slick-center": {
                ".short": {
                  display: "none",
                },
                ".full": {
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                  borderRadius: "0px 0px 5px 5px",
                },
              },
              ".short": {
                display: "flex",
              },
              ".full": {
                display: "none",
              },
            }}
          >
            <Slider {...settings}>
              <Pokemon
                img="442.png"
                name="Spiritomb"
                number="442"
                type={["Ghost", "Dark"]}
                ability="Pressure"
              />
              <Pokemon
                img="546.png"
                name="Cottonee"
                number="546"
                type={["Grass", "Fairy"]}
                ability="Infiltrator / Prankster"
              />
              <Pokemon
                img="650.png"
                name="Chespin"
                number="650"
                type={["Grass"]}
                ability="Overgrow"
              />
              <Pokemon
                img="651.png"
                name="Quilladin"
                number="651"
                type={["Grass"]}
                ability="Overgrow"
              />
              <Pokemon
                img="726.png"
                name="Torracat"
                number="726"
                type={["Fire"]}
                ability="Blaze"
              />
              <Pokemon
                img="726.png"
                name="Torracat"
                number="726"
                type={["Fire"]}
                ability="Blaze"
              />
              <Pokemon
                img="726.png"
                name="Torracat"
                number="726"
                type={["Fire"]}
                ability="Blaze"
              />
              <Pokemon
                img="726.png"
                name="Torracat"
                number="726"
                type={["Fire"]}
                ability="Blaze"
              />
              <Pokemon
                img="726.png"
                name="Torracat"
                number="726"
                type={["Fire"]}
                ability="Blaze"
              />
            </Slider>
          </Box>
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Button
              sx={{
                color: "white",
                backgroundColor: "black",
                width: "244px",
                height: "45px",
                marginTop: "100px",
                marginRight: "200px",
                ":hover": {
                  backgroundColor: "black",
                },
              }}
            >
              Explore More Pokémon
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              height: "100%",
              width: "1024px",
              color: "black",
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
              padding: "30px",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Card
                w="281px"
                h_img="159px"
                img="season25-on-ptv-169-en.png"
                h_txt="190px"
                color="#30a7d7"
                control="column"
                h_color="white"
                title="The Ultimate Journey on Pokémon TV"
                subtitle={
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "'Roboto',arial,sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Ash’s ascent through the World Coronation Series continues
                    in
                    <em>Pokémon Ultimate Journeys: The Series</em>
                  </Typography>
                }
              />
              <Card
                w="281px"
                h_img="159px"
                img="pokemon-go-169.png"
                h_txt="210px"
                color="#675945"
                control="column"
                h_color="white"
                title="Mega Sableye and Turtonator Bring Darkness and Flames to Pokémon GO"
                subtitle="Choose your path—darkness or flame—and complete research tasks to earn a Premium Battle Pass and more during Pokémon GO’s Dark Flames event."
                sub_color="#ccc"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
                gap: "30px",
                width: "281px",
              }}
            >
              <Card
                w="281px"
                h_img="159px"
                img="pokemon-masters-ex-169.png"
                h_txt="150px"
                color="#4dad5b"
                control="column"
                h_color="white"
                title="Wish upon a Star with Tate (Summer 2023) & Jirachi"
                subtitle="Tate reaches new heights after partnering with the Wish Pokémon during Pasio’s star festival."
              />
              <Typography
                variant="h2"
                sx={{
                  color: "#919191",
                  fontSize: "187.5%",
                }}
              >
                What's New This Week
              </Typography>
              <Card
                w="281px"
                h_img="159px"
                img="pokemon-go-169.jpeg"
                h_txt="159px"
                color="#a4a4a4"
                control="column"
                h_color="black"
                title="Heatran Pokémon GO Raid Battle Strategy"
                subtitle="Learn how to catch and make the best use of this fiery Steel- and Fire-type Legendary Pokémon."
                sub_color="#616161"
              />
            </Box>
            <Box
              sx={{
                marginTop: "25px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Card
                w="281px"
                h_img="159px"
                img="sv02-top-cards-169-en.png"
                h_txt="230px"
                color="#ff90c4"
                control="column"
                h_color="white"
                title={
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1em",
                    }}
                  >
                    Look Toward the Future of Competitive Play with
                    <em>Scarlet & Violet—Paldea Evolved </em>
                  </Typography>
                }
                subtitle="Powerful Pokémon ex, a disruptive Supporter card, and the redux of a classic Special Energy card are shaking things up in the Pokémon TCG."
                sub_color="#c3005b"
              />
              <Card
                w="281px"
                h_img="159px"
                img="swsh-giveaway-169.png"
                h_txt="220px"
                color="#1b53ba"
                control="column"
                h_color="white"
                title={
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1em",
                    }}
                  >
                    Enter to Win a Piece of the Pokémon TCG:
                    <em>Sword & Shield</em> Vault
                  </Typography>
                }
                subtitle={
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "'Roboto',arial,sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Don’t miss your chance to win a collection of 12 booster
                    display boxes from the Pokémon TCG:
                    <em>Sword & Shield</em> Series.
                  </Typography>
                }
                sub_color="#30a7d7"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "281px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#ee6b2f",
                    color: "white",
                    borderRadius: "5px 5px 0px 0px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "20px",
                  }}
                >
                  <h2>View All News</h2>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#30a7d7",
                    color: "black",
                    borderRadius: "0px 0px 5px 5px",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <p>Keep up with all the latest developments!</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </WebName>
  );
}
