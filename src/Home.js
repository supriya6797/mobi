import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container } from '@mui/material';
const Home = () => {
   
    const [image,setImage] = useState(null);
    const [allImage,setAllImage] = useState(null);
useEffect(()=>{
getImage()
},[]);

    const upload = async(e)=>{
        e.preventDefault(e);
        const formData = new FormData();
        formData.append('image',image);

        const result = await axios.post(
        'http://localhost:3001/upload',formData,
        {
        headers:{ "Content-Type": "multipart/form-data"},
       }
    )};
    
    const handleChange=(e)=>{
        console.log(e.target.files[0]);
        setImage(e.target.files[0])
    };
    const getImage = async()=>{
     const result =   await axios.get('http://localhost:3001/getImage');
        console.log(result);
        setAllImage(result.data.data);
    }
    
  

    return ( <>
    <Container >
    <h2>File uploader</h2>
    <Box component="form" onSubmit={upload}>
        <input type='file'  accept="image/*" onChange={handleChange}/>
        <button type='button' onClick={upload}>submit</button>
      
        <br />
        {allImage == null? ""
        : allImage.map((data)=>{
            return <img src={require(`./images/${data.image}`)} height={300} width={300}/>
        })
       }
    </Box>
    </Container>
    </> );
}
 
export default Home;