'use client'

import React, { useState } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';
import MyPopup from './popup';

const MyQuestion = ({children, solved, question, name1, name2=''}) => {
  const [inputText, setInputText] = useState('');
  const [showDiv, setShowDiv] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    if (inputText.toLowerCase() == name1.toLowerCase() || inputText.toLowerCase() == name2.toLowerCase()) {
      setShowDiv(true);
      solved()
    } else {
      setShowDiv(false);
    }
  };

  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', mt:3}}>
        <Typography variant='body2' sx={{fontStyle:'italic', color:'text.secondary', mb:1}}>{question}</Typography>
        <Box sx={{display:'flex', gap:1}}>
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
