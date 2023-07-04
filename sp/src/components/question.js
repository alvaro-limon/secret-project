'use client'

import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import MyPopup from './popup';

const MyQuestion = ({children, solved, name1, name2=''}) => {
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
    <Box sx={{display:'flex', flexDirection:'column', mt:3}}>
        <Box sx={{display:'flex', gap:1}}>
            <TextField variant='outlined'
                label="Nombre de mi perro (cualquiera)"
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
