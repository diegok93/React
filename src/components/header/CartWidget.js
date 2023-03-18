import React, {useContext} from 'react';
import './navbar.css';
import './dist/output.css';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -5,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const CartWidget = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -5,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

const {quantity, total} = useContext(CartContext)

return (
<Link to={'/Cart'}>
<IconButton aria-label="cart">
  <StyledBadge badgeContent={quantity} color="primary">
    <ShoppingCartIcon color="success" />
  </StyledBadge>
</IconButton>
</Link>

)

}

export default CartWidget