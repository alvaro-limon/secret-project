'use client'


import styles from './page.module.css'
import { maintheme } from './theme'
import { useState, useRef } from 'react'

import { Box, Button, Container, List, Paper, ThemeProvider, Typography } from '@mui/material'
import MyPopup from '@/components/popup'
import AnimationFadeOut from '@/components/intro'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MyQuestion from '@/components/question'
import MyMultQuestion from '@/components/multquestion'

import Image from 'next/image'
import Map from '@/components/map'

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
              <MyQuestion question='Ej. ¿Cual es el nombre de mi perro? (cualquiera)' ans1='jack' ans2='toby' solved={handleSolvedQuestions}>
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

          {/* section */}
          {solvedQuestions >= 1 && (
          <Box id='section_6' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                ¿Lista? ¡Vamos!
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_7').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 1 && (
          <Box id='section_7' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Viendo para atrás...
              </Typography>
              <MyMultQuestion question='¿Cómo fue que nos conocimos?' ans1='option2' solved={handleSolvedQuestions} options={[
                { value: 'option1', text: 'En una camioneta, camino a la obra' },
                { value: 'option2', text: 'Me aceptaste invitarte una nieve' },
                { value: 'option3', text: 'Cenando, segundo día de misiones' }
              ]}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_8').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyMultQuestion>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 2 && (
          <Box id='section_8' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                La primera vez que salimos a un plan,
              </Typography>
              <MyMultQuestion question='¿A dónde fuimos?' ans1='option3' solved={handleSolvedQuestions} options={[
                { value: 'option1', text: 'Una tienda de helado' },
                { value: 'option2', text: 'Un partido de baseball' },
                { value: 'option3', text: 'Casa de chei' }
              ]}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_9').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyMultQuestion>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 3 && (
          <Box id='section_9' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                En uno de nuestros primeros planes, decidimos a ir a un partido de baseball...
              </Typography>
              <MyMultQuestion question='¿A dónde fuimos?' ans1='option3' solved={handleSolvedQuestions} options={[
                { value: 'option1', text: 'A ver a los mariachis de Jalisco' },
                { value: 'option2', text: 'A casa del Chei' },
                { value: 'option3', text: 'Al estadio, a ver al Canelo' }
              ]}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_10').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyMultQuestion>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 4 && (
          <Box id='section_10' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Los betos y yo decidimos ir a una expo de cerveza. Decidí llevarte algo de vuelta.
              </Typography>
              <MyMultQuestion question='¿Qué fué lo que te llevé?' ans1='option1' solved={handleSolvedQuestions} options={[
                { value: 'option1', text: 'Hidromiel con frutos rojos y una cerveza' },
                { value: 'option2', text: 'Una cerveza IPA y una botella de hidromiel' },
                { value: 'option3', text: 'Solamente unos stickers' }
              ]}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_11').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyMultQuestion>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 5 && (
          <Box id='section_11' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Nada mal... ¡Sí te acuerdas! 
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                A decir verdad, yo tiendo a olvidar, pero hay ciertas cosas que no se olvidan...
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_12').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 5 && (
          <Box id='section_12' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Conociendote, he notado varias cualidades especiales de tí,
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                Como tus intereses de lectura :{")"}.
              </Typography>
              <MyQuestion question='¿Acerca de qué te gustaba leer?' ans1='jack' ans2='psicopatas' solved={handleSolvedQuestions}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_13').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyQuestion>
            </MyPopup>
          </Box>
          )} 

          {/* section */}
          {solvedQuestions >= 6 && (
          <Box id='section_13' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Aprendí que a veces falla tu sentido de dirección...
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                {'"Quédate cerca, no vayas a chocar"'}
              </Typography>
              <MyMultQuestion question='¿Cuándo fué que me diste la mano por primera vez?' ans1='option3' solved={handleSolvedQuestions} options={[
                { value: 'option1', text: 'En tequila, sentados en una mesa' },
                { value: 'option2', text: 'Habiendo salido de casa de chei' },
                { value: 'option3', text: 'En el estadio, cruzando la calle' }
              ]}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_14').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyMultQuestion>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 7 && (
          <Box id='section_14' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                ...y que tienes un buen sentido del humor.
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                {'"Yo me llamo Ulises. ¿Y tú?"'}
              </Typography>
              <MyQuestion question='¿Cómo te presentaste?' ans1='Anacleta' solved={handleSolvedQuestions}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_15').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyQuestion>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 8 && (
          <Box id='section_15' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                También aprendí que tienes un gran corazón,
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                Y un talento innato para convivir con niños. {"(tal vez por ser de la edad ;))"}
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_16').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>
          )} 

          {/* section */}
          {solvedQuestions >= 8 && (
          <Box id='section_16' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Que tienes la capacidad de ver las cosas con humor...
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                ¡Incluyendo la carrilla!
              </Typography>
              <MyQuestion question='¿Qué es algo que te gusta? jajaja!' ans1='la velocidad' ans2='velocidad' solved={handleSolvedQuestions}>
                <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                    () => {
                      document.getElementById('section_17').scrollIntoView({ behavior:'smooth',block:'start'});
                    }
                }><ArrowDownwardIcon/></Button>
              </MyQuestion>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 9 && (
          <Box id='section_17' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                ...y que llevas alegría a donde vayas.
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_18').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 9 && (
          <Box id='section_18' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                ¡Muy bien! Solamente queda una más antes de llegar al final.
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_19').scrollIntoView({ behavior:'smooth',block:'start'})
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 9 && (
          <Box id='section_19' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Pero no es una pregunta.
              </Typography>
              <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                Solamente es un gracias. Gracias por haberte dado a conocer, por acompañarme, por convivir con las personas que aprecio,
                ver películas raras conmigo, y tolerar todos los chistes de humor negro {"(buenísimos)"}. 
                ¡Te quiero mucho!
              </Typography>
              <Button variant='contained'sx={{fontWeight:'bold', color:'text.primary', mt:3}}  id='btn_s2' onClick={
                  () => {
                    document.getElementById('section_20').scrollIntoView({ behavior:'smooth',block:'start'})
                    handleSolvedQuestions()
                  }
              }><ArrowDownwardIcon/></Button>
            </MyPopup>
          </Box>
          )}

          {/* section */}
          {solvedQuestions >= 9 && (
          <Box id='section_20' sx={{height:'100vh', width:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MyPopup>
              <Typography variant='h5' sx={{textAlign:'center', color:'text.primary'}}>
                Ahora si, ¡sorpresa!
              </Typography>
              <Paper elevation={3} sx={{width:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:3, mt:2, pt:3, pb:6, bgcolor:'white'}}>
                <Box sx={{margin:3}}>
                  <Image src='/froggif.gif' width={50} height={50} alt=''/>
                </Box>
                
                <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                  ¡Felicidades!
                </Typography>
                <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic'}}>
                  Este ticket es válido para:
                </Typography>
                <Typography variant='h6' sx={{textAlign:'left', color:'text.secondary', fontStyle:'italic', mb:2}}>
                  <ul>
                    <li>Un abrazo</li>
                    <li>Unas flores</li>
                  </ul>
                </Typography>
                <Typography variant='h6' sx={{textAlign:'center', color:'text.secondary', fontStyle:'italic', mb:2}}>
                  Lo único que tienes que hacer es mostrarlo a tu distribuidor más cercano.
                </Typography>
                <Map address="Ricardo Palma 3033"/>
              </Paper>
            </MyPopup>
          </Box>
          )}
    
        </Container>
      </Box>
    </ThemeProvider>
  )
}
