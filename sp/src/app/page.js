'use client'


import styles from './page.module.css'
import { maintheme } from './theme'
import { useState, useRef } from 'react'

import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import MyComponent from '@/components/popup'
import AnimationFadeOut from '@/components/intro'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Home() {

  const [animationComplete, setAnimationComplete] = useState(false);
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <ThemeProvider theme={maintheme}>
      <AnimationFadeOut complete={handleAnimationComplete} />
      <Box sx={{bgcolor:'background.default'}}>
        <Container maxWidth='lg' sx={{bgcolor:'background.default'}}>
          {animationComplete ? (
            <Box sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
              <MyComponent>
                <Typography variant='h2' fontWeight='bold' sx={{textAlign:'center', color:'text.primary'}}>
                  ¡Hola Pau!
                </Typography>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary'}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_2').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
                }><ArrowDownwardIcon/></Button>
              </MyComponent>
            </Box>
          ) : // filler box, default theme color
          <Box sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
          </Box>
          }
          <Box id='section_2' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyComponent>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                como sabrás...
                le sé un poco a esto de las páginas web
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary'}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_3').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyComponent>
          </Box>
          <Box id='section_3' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyComponent>
              <Typography variant='h4' sx={{textAlign:'center', color:'common.black'}}>
                
              </Typography>
            </MyComponent>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
