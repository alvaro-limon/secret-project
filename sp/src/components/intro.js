'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'

const AnimationFadeOut = ({complete}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, scale:1 }}
        animate={{ opacity: 0, scale:0 }}
        exit={{ opacity: 0, scale:0 }}
        transition={{ duration: 0.6, type:'spring', delay:1}}
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position:'absolute',
          backgroundColor:'#A0C49D'
        }}
        onAnimationComplete={complete}
      >
        <Image src='/froggif.gif' width={50} height={50} alt=''/>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationFadeOut;
