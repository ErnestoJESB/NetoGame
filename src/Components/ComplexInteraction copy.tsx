import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  /* creáme un json con datos para esos campos sobre frameworks de desarrollo como react js, vue, etc */
  const data = [
    {
      id: 1,
      name: "React",
      image:
        "data:image/png;base64,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",
      description: "A JavaScript library for building user interfaces",
      date: "May 29, 2013",
    },
    {
      id: 2,
      name: "Angular",
      image:
        "data:image/png;base64,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",
      description: "A platform for building web applications",
      date: "September 14, 2016",
    },
    {
      id: 3,
      name: "Vue.js",
      image:
        "data:image/png;base64,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",
      description: "The Progressive JavaScript Framework",
      date: "February 2014",
    },
    {
      id: 4,
      name: "Ember.js",
      image: "ember.png",
      description: "A framework for creating ambitious web applications",
      date: "December 8, 2011",
    },
    {
      id: 5,
      name: "Backbone.js",
      image: "backbone.png",
      description:
        "A JavaScript library for building scalable and maintainable web applications",
      date: "October 13, 2010",
    },
    {
      id: 6,
      name: "Meteor",
      image: "meteor.png",
      description: "An open-source platform for web, mobile, and desktop",
      date: "January 20, 2012",
    },
    {
      id: 7,
      name: "Aurelia",
      image: "aurelia.png",
      description: "A next generation JavaScript client framework",
      date: "July 27, 2015",
    },
    {
      id: 8,
      name: "Mithril",
      image: "mithril.png",
      description:
        "A modern client-side JavaScript framework for building Single Page Applications",
      date: "March 3, 2014",
    },
    {
      id: 9,
      name: "Polymer",
      image: "polymer.png",
      description:
        "A JavaScript library for building web applications using Web Components",
      date: "May 2013",
    },
    {
      id: 10,
      name: "Svelte",
      image: "svelte.png",
      description: "A radical new approach to building user interfaces",
      date: "November 2016",
    },
  ];

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Cambia el contenido de los campos del card por los datos del json */}
      {data.map((data, index) => (
        <div>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={data.name}
            subheader={data.date}
          />
          <CardMedia
            component="img"
            height="194"
            image={data.image}
            alt={data.name}
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </div>
      ))}
    </Card>
  );
}
