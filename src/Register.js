import { Box, Container, Grid, TextField,Button, Paper } from '@mui/material';
import axios from 'axios';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Register= () => {
    const [user,setUser] = useState({
        name:"",
        mobile:"",
        email:"",
        password:""
    })
  
    const [errors,setErrors] =useState({});
    const handleChange=(e)=>{
  const {name,value} = e.target;
  setUser({...user,
    [name]:value}
   
  )
    }
    const handleSubmit=(e)=>{
        e.preventDefault(e);
      const validationErrors={};
      if(!user.name.trim()){
        validationErrors.name =("name is required")
      } else if(user.name.length <3 ) {
        validationErrors.name=("Name should contained ,more than 3 chracter")
      }
      if(!user.mobile.trim()){
        validationErrors.mobile=("mobile is required")
      }else if(user.mobile.length<10 || user.mobile.length > 10){
        validationErrors.mobile=("Mobiled should contain 10 digit")
      }
      if(!user.email.trim()){
        validationErrors.email=("email is required")
      }
      if(!user.password.trim()){
        validationErrors.password=("password is required")
      }
setErrors(validationErrors)
if(Object.keys(validationErrors).length === 0){
    alert("User RegisterSuccessfully");
    axios.post('http://localhost:3001/',{...user})
  .then(result=> console.log(result))
  .catch(err=>console.log(err))
    console.log(user);
}

    }
    return ( <>
    <Container maxWidth="md">
        <Button type='submit'variant='contained'><Link
        style={{ textDecoration:"none",color:"white"}}
         to={'/login'}>Login</Link></Button>
        <Paper sx={{p:5}}>
        <Box component="form" onSubmit={handleSubmit}>
            <Grid >
                <TextField
                fullWidth
                variant='outlined'
                name='name'
                label="Name"
                placeholder='Enter Your Name Here'
                value={user.name}
                onChange={handleChange}
                />
                <span>{errors.name && errors.name}</span>
            </Grid>
            <Grid>
                <TextField
                fullWidth
                variant='outlined'
                name='mobile'
                label="Mobile"
                placeholder='Enter Your mobile Here'
                value={user.mobile}
                onChange={handleChange}
                />
                <span>{errors.mobile && errors.mobile}</span>
            </Grid>
            <Grid>
                <TextField
                fullWidth
                variant='outlined'
                name='email'
                label="Email"
                type='email'
                placeholder='Enter Your email Here'
                value={user.email}
                onChange={handleChange}
                />
                <span>{errors.email && errors.email}</span>
            </Grid>
            <Grid>
                <TextField
                fullWidth
                variant='outlined'
                name='password'
                label="Password"
                type='password'
                placeholder='Enter Your password Here'
                value={user.password}
                onChange={handleChange}
                />
                <span>{errors.password && errors.password}</span>
            </Grid>
            <Grid>
                <Button variant="contained" type="submit">Register</Button>
            </Grid>
        </Box>
        
        </Paper>
    </Container>
               
    </> );
}
 
export default Register;