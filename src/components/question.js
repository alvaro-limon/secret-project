'use client'

import React, { useState } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';
import MyPopup from './popup';

const MyQuestion = ({children, solved, question, ans1, ans2=''}) => {
  const [inputText, setInputText] = useState('');
  const [showDiv, setShowDiv] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    if (ans2 == '') {
      ans2 = 'filler'
    }

    if (inputText.toLowerCase() == ans1.toLowerCase() || inputText.toLowerCase() == ans2.toLowerCase()) {
      setShowDiv(true);
      solved()
    } else {
      setShowDiv(false);
    }
  };

  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', mt:3}}>
        <Typography variant='body2' sx={{fontStyle:'italic', color:'text.secondary', mb:1}}>{question}</Typography>
        <Box sx={{display:'flex', justifyContent:'center', gap:1}}>
            <TextField variant='outlined'
                value={inputText}
                onChange={handleInputChange}
                sx={{height:1/1, outline:'primary.main'}}
            />
            <Button variant='outlined'sx={{height:56, color:'text.primary', borderColor:'#729483'}} onClick={handleSubmit}>OK!</Button>
      </Box>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <MyPopup>
            {showDiv && (children)}
        </MyPopup>
      </Box>
      
    </Box>
  );
};

export default MyQuestion;
