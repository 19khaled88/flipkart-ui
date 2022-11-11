import { Box ,Button} from '@mui/material'
import {Dropdown} from 'rsuite'
import React from 'react'
import { data } from '../data/data'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Navbar = () => {
 
  return (
    <Box
      style={{
        display: 'flex',
        // marginTop: '55px',
        justifyContent: 'space-evenly',
        margin: '55px 0px 20px 0px',
        padding: '0px 0px 15px 0px',
      }}
      sx={{ boxShadow: 3 }}
    >
      {data.map((info) => (
        <span key={info.id}>
          <Box
            style={{
              dispatch: 'flex',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={info.icon}
              alt="empty"
              style={{ width: '50px', height: '50px', padding: 0, margin: 0 }}
            />

            <Box 
              style={{display:'flex',flexDirection:'row'}}
            >              
              <p style={{ padding: 0, margin: 0 }}>{info.name}</p>
              <KeyboardArrowDownIcon />
              <KeyboardArrowUpIcon />
              
            </Box>
          </Box>
        </span>
      ))}

     
    </Box>
  )
}

export default Navbar
