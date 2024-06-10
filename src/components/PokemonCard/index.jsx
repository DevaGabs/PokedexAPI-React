import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { typeHandler } from "../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PokemonCard.css";


const cardsData = [
  {
    image: 'https://via.placeholder.com/200',
    name: 'Iguana',
    types: ['Reptile'],
  },
  {
    image: 'https://via.placeholder.com/200',
    name: 'Chameleon',
    types: ['Reptile'],
  },
  {
    image: 'https://via.placeholder.com/200',
    name: 'Gecko',
    types: ['Reptile'],
  },
];

export default function PokemonCard({ name, image, types }) {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar se o mouse está sobre o card

  return (
    <Card
      sx={{ maxWidth: 345, height: 300 }}
      className={isHovered ? "pokemon-card hovered" : "pokemon-card"} // Adicionando ou removendo a classe 'hovered' baseado no estado
      onMouseEnter={() => setIsHovered(true)} // Definindo o estado como true quando o mouse entra no card
      onMouseLeave={() => setIsHovered(false)} // Definindo o estado como false quando o mouse sai do card
    >
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {types.join(", ")}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function PokemonCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Adicionado para autoplay
    autoplaySpeed: 3000, // Velocidade do autoplay em milissegundos
  };

  return (
    <Slider {...settings}>
      {cardsData.map((card, index) => (
        <div key={index}>
          <PokemonCard
            name={card.name}
            image={card.image}
            types={card.types}
          />
        </div>
      ))}
    </Slider>
  );
}