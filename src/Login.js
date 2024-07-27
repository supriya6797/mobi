import { Box, Container, Grid, Paper, TextField,Button, Alert} from '@mui/material';
import axios from 'axios';

import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login= () => {
    const [user,setUser] = useState({
email:"",
password:""
    });

    const navigate = useNavigate();

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    };

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{...user})
        .then((result)=>{
           console.log(result)
          navigate('/home')
           
        })
        .catch((err)=>console.log(err))
          }
    

    return (<>
    <Container maxWidth="sm" style={{ marginTop:"80px"}}>
        <Paper sx={{ p:4,backgroundColor:"lemonchiffon",borderRadius:"50px"}}>
            <Box component="form" onSubmit={handleSubmit} >
                <h2 style={{textAlign:"center"}}>Login Here</h2>
                <Grid sx={12}>
                    <TextField
                     variant='outlined'
                     fullWidth
                     label="Email"
                     type="email"
                     name="email"
                     placeholder='Enter your email here'
                     value={user.email}
                     onChange={handleChange}
                    />
                </Grid>
                <Grid sx={12}>
                    <TextField
                     variant='outlined'
                     fullWidth
                     label="Password"
                     type="password"
                     name="password"
                     placeholder='Enter your password here'
                     value={user.password}
                     onChange={handleChange}
                    />
                </Grid>
                <Grid style={{ textAlign:"center",marginTop:"9px"}}> 
                    <Button variant="contained" type="submit" >Login</Button>
                </Grid>
            </Box>
        </Paper>
    </Container>
    </>  );
}
 
export default Login;