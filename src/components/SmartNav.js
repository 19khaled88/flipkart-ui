import { Box ,Button} from '@mui/material'
import {Dropdown} from 'rsuite'
import React from 'react'
import { data } from '../data/data'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const SmartNav = () => {
 
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
            //   textAlign: 'center',
            //   alignItems: 'center',
              textDecoration:'none',
              listStyle: 'none'
            }}
          >
            <Dropdown style={{padding:'0px',margin:'0px'}} title="Hover" trigger="hover">
                <Dropdown.Item style={{listStyle:'none',padding:'0px',margin:'0px'}}>Image</Dropdown.Item>
                <Dropdown.Item style={{listStyle:'none'}}>Profile</Dropdown.Item>
                <Dropdown.Item style={{listStyle:'none'}}>Download As...</Dropdown.Item>
                <Dropdown.Item style={{listStyle:'none'}}>Export PDF</Dropdown.Item>
                <Dropdown.Item style={{listStyle:'none'}}>Export HTML</Dropdown.Item>
                <Dropdown.Item style={{listStyle:'none'}}>Settings</Dropdown.Item>
                <Dropdown.Item style={{listStyle:'none'}}>About</Dropdown.Item>
            </Dropdown>

          </Box>
        </span>
      ))}

     
    </Box>
  )
}

export default SmartNav
