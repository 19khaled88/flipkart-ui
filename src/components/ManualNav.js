import { Box ,Button,Divider} from '@mui/material'
import {Dropdown} from 'rsuite'
import React, { useState } from 'react'
import { data } from '../data/data'
import '../css/nav.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const ManualNav = () => {
    
    
   
    const [activeId, setActiveId] = useState( '')
    const handleActive=(id)=>{
        setActiveId(id)
    }

    const ifSubitemHas=(data)=>{
        let result = []
        if(data?.subItem && data?.subItem.length > 0){
           
            // <KeyboardArrowUpIcon className='up'/>
            data.id == activeId ? 
           (result.push(<KeyboardArrowUpIcon className='up'/>)) : 
                (result.push(<KeyboardArrowDownIcon className='down' />)) 
        }
        return result
    }


    const handleDeactive=(id)=>{
        setActiveId('')
    }
    const subItems =(sbItem)=>{
        let array =[]
             for(let sb in sbItem){ 
                 array.push(
                    <ul key={sb} style={{marginBottom:'3px',marginTop:'3px'}}>
                        <li style={{listStyle:'none', paddingLeft:'0px',paddingTop:'0px',paddingBottom:'0px'}}>{Object.keys(sbItem[sb])}</li>
                        <Divider />
                    </ul>
                 )
             }
        return array
    }
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '55px 0px 20px 0px',
        padding: '0px 0px 15px 0px',
      }}
      sx={{ boxShadow: 3 }}
      className="menu-bar"
    >
      {data.map((info) => (
        <span key={info.id}>
          <Box
                style={{dispatch: 'flex',textAlign: 'center',alignItems: 'center', }}
                className={ info.id == activeId ? 'active':'inactive'}    
                onMouseOver={()=>handleActive(info.id)}  
                onMouseLeave={()=>handleDeactive(info.id)}           
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
                <Box 
                    className='sub-menu'
                >
                    {
                       subItems(info.subItem)
                    }
                </Box>
                { 
                  
                  ifSubitemHas(info)
                        // info.id == activeId ? 
                        //     <KeyboardArrowUpIcon className='up'/> : 
                        //         <KeyboardArrowDownIcon className='down' /> 
                }
            </Box>
          </Box>
        </span>
      ))}

     
    </Box>
  )
}

export default ManualNav
