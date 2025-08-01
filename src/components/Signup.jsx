import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { use } from 'react';
import axios from 'axios';
import watermelonBg from '../assets/WATERMELON.jpg';

const Signup = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('signup');

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_API_URL}/signup`, { name, email, password })
      .then(result => {
        console.log(result.data);
        alert('Signup successful!');
        navigate('/login'); 
      })
      .catch(err => {
    if (err.response) {
      
      console.log("Server message:", err.response.data);
      alert(err.response.data); 
    } else {
      console.log("Unexpected error:", err.message);
      alert('Signup failed! Please try again.');
    }
  });
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundImage: "radial-gradient(circle at center, #99d7aaff, #5DB192, #55d093ff)"
 }}
    >
      

      <Paper
  elevation={13}
  sx={{
    padding: 4,
    width: 400,
    backgroundImage: `url(${watermelonBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px"
  }}
>

        <Typography variant="h4" align="center" gutterBottom sx={{
    fontFamily: '"Press Start 2P", monospace',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #ff9a9e, #fad0c4)', 
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center'
  }}>
          HUNTRIX
        </Typography>

        <Box display="flex" justifyContent="center" mb={3}>
          <ToggleButtonGroup
  value={selected}
  exclusive
  onChange={(event, newVal) => {
    if (newVal !== null) {
      setSelected(newVal);        
      if (newVal === 'signup') {
        navigate('/signup');      
      } else if (newVal === 'login') {
        navigate('/login');       
      }
    }
  }}
>

            <ToggleButton 
  value="signup" 
  sx={{ 
    backgroundColor: '#F75C57', 
    color: 'white',
    '&.Mui-selected': {
      backgroundColor: '#5FD499', 
      color: '#013220',
    },
    '&:hover': {
      backgroundColor: '#e14d4a',
    }
  }}
>
  Signup
</ToggleButton>

<ToggleButton 
  value="login" 
  sx={{ 
    backgroundColor: '#F75C57',
    color: 'white',
    '&.Mui-selected': {
      backgroundColor: '#5FD499',
      color: '#013220',
    },
    '&:hover': {
      backgroundColor: '#e14d4a',
    }
  }}
>
  Login
</ToggleButton>

          </ToggleButtonGroup>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField fullWidth type="text" label="Username" margin="normal"
          sx={{
    backgroundColor: "rgba(233, 198, 216, 0.8)",
    borderRadius: "5px"
  }}
          onChange={(e)=>setName(e.target.value)}/>
          <TextField fullWidth type="email" label="Email" margin="normal"
          sx={{
    backgroundColor: "rgba(233, 198, 216, 0.8)",
    borderRadius: "5px"
  }} 
          onChange={(e)=>setEmail(e.target.value)}/>
          <TextField fullWidth type="password" label="Password" margin="normal" 
          sx={{
    backgroundColor: "rgba(233, 198, 216, 0.8)",
    borderRadius: "5px"
  }}
          onChange={(e)=>setPassword(e.target.value)}/>
          
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#ffa09dff' }}>
            Sign-Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
