'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

import styles from '../app/page.module.css'
import '../app/page.module.css'

function MyPopup ({children}) {
  return (
    <Box sx={{
      width:1/1,
      height:1/1,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <motion.div 
        style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center'
        }}

        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.6, type:'spring'}}
        viewport={{ once: false}}
      >
        {children}
      </motion.div>
    </Box>
  ) 
}

export default MyPopup
