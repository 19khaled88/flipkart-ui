import { ShoppingCart } from '@mui/icons-material'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import AddchartIcon from '@mui/icons-material/Addchart'
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
// import FavoriteIcon from '@mui/icons-material/Favorite'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import { LoginDropdownItems,more } from '../data/data'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button, Divider, styled, Typography } from '@mui/material'
import '../css/customButton.css'

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

  const customFunc = (data) => {
    let array = []
    data.map((item ,index) =>
      array.push(
        <div key={index} style={{display:'flex',flexDirection:'row',alignItems:'center',paddingLeft:'8px'}}>
            <img src={item.icon} alt="empty" style={{width:'18px', height:'18px'}} />
            <li
              style={{
                listStyle: 'none',
                textAlign: 'start',
                padding: '7px 5px 7px 5px',
              }}
            >
              {item.name}
            </li>
        
          <Divider />
        </div>
      ),
    )
    return array
  }

  return (
    <Wrapper>
      <Box
        className='login-menu'
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <LoginButton
          className='menu-button'
        >
          Login
        </LoginButton>
         <ul 
          className='dropdown-menu'
          key={Math.random() * 100000}
          style={{
            margin: '0px',
            padding: '0px',
            color: 'black',
            position: 'absolute',
            backgroundColor: '#fff',
            top: 35,
            borderRadius: '5px',
            // borderBottomLeftRadius: '5px',
            // borderBottomRightRadius: '5px',
            boxShadow:
              'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            width: '150px',
          }}
        >
        {customFunc(LoginDropdownItems)}
        </ul>
      </Box>
      <Typography style={{ marginTop: 3 }}>Become a seller</Typography>
      <Box
        className="more-menu"
      >
        <Typography
          className='menu-button'
          style={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
          }}
        >
          More <KeyboardArrowDownIcon />
        
        </Typography>
        <ul 
          className='dropdown-menu'
          key={Math.random() * 100000}
          style={{
            margin: '0px',
            padding: '0px',
            color: 'black',
            position: 'absolute',
            backgroundColor: '#fff',
            top: 35,
            borderRadius: '5px',
            // borderBottomLeftRadius: '5px',
            // borderBottomRightRadius: '5px',
            boxShadow:
              'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            width: '150px',
          }}
        >
        {customFunc(more)}
        </ul>
      </Box>
      
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
