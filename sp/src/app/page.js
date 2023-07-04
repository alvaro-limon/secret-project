'use client'


import styles from './page.module.css'
import { maintheme } from './theme'
import { useState, useRef } from 'react'

import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import MyPopup from '@/components/popup'
import AnimationFadeOut from '@/components/intro'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MyQuestion from '@/components/question'

export default function Home() {

  const [animationComplete, setAnimationComplete] = useState(false);
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const [solvedQuestions, setSolvedQuestions] = useState(0);
  const handleSolvedQuestions = () => {
    setSolvedQuestions(solvedQuestions + 1)
  };

  return (
    <ThemeProvider theme={maintheme}>
      {!animationComplete && (<AnimationFadeOut complete={handleAnimationComplete}/>)}
      <Box sx={{bgcolor:'background.default'}}>
        <Container maxWidth='lg' sx={{bgcolor:'background.default'}}>
          {animationComplete ? (
            <Box sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
              <MyPopup>
                <Typography variant='h2' fontWeight='bold' sx={{textAlign:'center', color:'text.primary'}}>
                  ¡Hola Pau!
                </Typography>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_2').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
                }><ArrowDownwardIcon/></Button>
              </MyPopup>
            </Box>
          ) : // filler box, default theme color
          <Box sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
          </Box>
          }
          {/* section */}
          <Box id='section_2' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Como sabrás...
                se me da este tema de las páginas web
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_3').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>

          {/* section */}
          <Box id='section_3' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                ...y me pareció una manera creativa de hacerte una pequeña sorpresa.
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_4').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>

          {/* section */}
          <Box id='section_4' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Una dinámica simple: Tú respondes una pregunta correctamente...
              </Typography>
              <MyQuestion question='Ej. ¿Cual es el nombre de mi perro? (cualquiera)' name1='jack' name2='toby' solved={handleSolvedQuestions}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_5').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyQuestion>
            </MyPopup>
          </Box>
          
          {/* section */}
          {solvedQuestions >= 1 && (
          <Box id='section_5' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                ...y puedes pasar a la siguiente sección.
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                (¡Hay una sorpresa al final!)
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_6').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>
          )}

    
        </Container>
      </Box>
    </ThemeProvider>
  )
}
