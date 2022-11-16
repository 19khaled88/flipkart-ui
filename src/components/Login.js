import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './layouts/Layout'

const Login = () => {
  return (
    <Layout>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40%',
          height: '500px',
          margin: '70px auto',

          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
      >
        <Box
          style={{
            color: 'white',
            backgroundColor: '#2874f0',
            padding: '30px 10px 10px 15px',
            width: '30%',
            height: '92%',
          }}
        >
          <Typography style={{ fontSize: '20px', height: '10%' }}>
            Login
          </Typography>
          <label style={{ height: '30%' }}>
            Get access to your Orders, Wishlist and Recommendations
          </label>
          <Box
            style={{
              height: '60%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'end',
            }}
          >
            <img
              src="/login/logo-promo.png"
              alt="empty"
              style={{ width: '100%', height: '150px', borderRadius: '5px' }}
            />
          </Box>
        </Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            height: '100%',
            padding: '15px 10px 0px 10px',
          }}
        >
          <TextField
            style={{ height: '15%' }}
            id="standard-basic"
            label="Enter Email/ Mobile Number"
            variant="standard"
          />
          <Box
            style={{
              height: '15%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              style={{ width: '80%' }}
              id="standard-basic"
              label="Enter Password"
              variant="standard"
            />
            <Button style={{ fontSize: '11px' }}>Forgot?</Button>
          </Box>
          <label style={{ height: '10%', fontSize: '12px', color: 'grey' }}>
            By continuing, you agree to Flipkart's
            <a
              href="/terms"
              style={{ textDecoration: 'none', padding: '0px 2px 0px 2px' }}
            >
              Terms of use
            </a>
            and
            <a
              href="/privacy"
              style={{ textDecoration: 'none', padding: '0px 2px 0px 2px' }}
            >
              privacy policy
            </a>
          </label>
          <Button
            style={{
              height: '10%',
              width: '100%',
              margin: '10px auto',
              backgroundColor: '#fb641b',
              color: 'white',
            }}
          >
            Login
          </Button>
          <h2
            style={{
              height: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            class="divider line one-line"
            contenteditable
          >
            Or
          </h2>
          <Button
            style={{
              height: '10%',
              marginTop: '5px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            Request OTP
          </Button>
          <Link
            style={{
              height: '10%',
              textDecoration: 'none',
              textAlign: 'center',
              paddingTop: '15px',
            }}
            to="/register"
          >
            New to our world?
            <Button style={{ fontWeight: 'bold' }}> Register</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}

export default Login
