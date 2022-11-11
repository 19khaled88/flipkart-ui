import { ShoppingCart } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AddchartIcon from '@mui/icons-material/Addchart'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FavoriteIcon from '@mui/icons-material/Favorite'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  styled,
  Typography,
} from '@mui/material'

import React, { useState } from 'react'
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    font-size: 14px;
    text-align: center;
    align-items: center;

    margin: 0 10px 0 10px;
  }
`
const Container = styled(Box)`
  display: flex;
  margin-top: 3;
`
const LoginButton = styled(Button)`
  color: #2874fe;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
`

const LoginDropdown = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
`
const CustomButton = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorE2, setAnchorE2] = useState(null)
  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMoreClick = (event) => {
    console.log(window.innerWidth)
    if (anchorE2 !== event.currentTarget) {
      setAnchorE2(event.currentTarget)
    }
  }
  const handleMoreClose = () => {
    setAnchorE2(null)
  }
  return (
    <Wrapper>
      <LoginButton
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
        variant="contained"
      >
        Login
      </LoginButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>
          New Customer ? <Button type="button">Sign up</Button>
        </MenuItem>
        <Divider />
        <LoginDropdown>
          <AccountCircleIcon />
          <MenuItem onClick={handleClose}>My Account</MenuItem>
        </LoginDropdown>
        <Divider />
        <LoginDropdown>
          <LocalHospitalIcon />
          <MenuItem onClick={handleClose}>FlipKart Plus Zone</MenuItem>
        </LoginDropdown>
        <Divider />
        <LoginDropdown>
          <AddchartIcon />
          <MenuItem onClick={handleClose}>Orders</MenuItem>
        </LoginDropdown>
        <Divider />
        <LoginDropdown>
          <FavoriteIcon />
          <MenuItem onClick={handleClose}>Wishlist</MenuItem>
        </LoginDropdown>
        <Divider />
        <LoginDropdown>
          <CardGiftcardIcon />
          <MenuItem onClick={handleClose}>Gift Cards</MenuItem>
        </LoginDropdown>
        <Divider />
        <LoginDropdown>
          <EmojiEventsIcon />
          <MenuItem onClick={handleClose}>Rewards</MenuItem>
        </LoginDropdown>
      </Menu>
      <Typography style={{ marginTop: 3 }}>Become a seller</Typography>
      <Typography
        aria-owns={anchorE2 ? 'more-menu' : undefined}
        onClick={handleMoreClick}
        onMouseOver={handleMoreClick}
        variant="contained"
        style={{
          marginTop: 3,

          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
        }}
      >
        More <KeyboardArrowDownIcon />
      </Typography>
      <Menu
        id="more-menu"
        anchorE2={anchorE2}
        open={Boolean(anchorE2)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleMoreClose}
        MenuListProps={{
          onMouseLeave: handleMoreClose,
        }}
      >
        <MenuItem onClick={handleMoreClose}>Notification preference</MenuItem>
        <Divider />
        <MenuItem onClick={handleMoreClose}>24*7 customer care</MenuItem>
        <Divider />
        <MenuItem onClick={handleMoreClose}>Advertise</MenuItem>
      </Menu>
      <Typography
        style={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
        }}
      >
        <ShoppingCart />
        Cart
      </Typography>
    </Wrapper>
  )
}

export default CustomButton
