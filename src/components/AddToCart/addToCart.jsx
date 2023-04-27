import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Item(props) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
    };
    props.addToCart(item);
  };

  return (
    <Card style={{maxWidth: 345}}>
      <CardActionArea>
        <CardMedia
          style={{height: 140}}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography variant="h6" component="p">
            {props.price}
          </Typography>
          <input
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            min="1"
            max="99"
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Item;