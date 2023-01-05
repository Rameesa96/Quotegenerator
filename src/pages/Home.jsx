import React, { useEffect,useState } from 'react'
import './Style.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Form, Button, Col, Container } from 'react-bootstrap';
import axios from 'axios'
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  
function Home() {
    const [datas,setDatas]=useState('')
    const [random ,setRandom]=useState({text: 'Our greatness lies not so much in being able to remake the world as being able to remake ourselves.', author: 'Mahatma Gandhi'})

    useEffect(()=>{
        axios.get('https://type.fit/api/quotes').then(response=>{
            setDatas(response.data)
        })
          })
        
          const handleClick=()=>{
            let index = Math.floor(Math.random() * Array.from(datas).length); // random index
            setRandom(datas[index])
        
          }



  return (
    <div>
        <div className='header'>
           <p className='Home'>Home</p>
           <p className='bookmark'>Bookmark</p>
        </div>
        <div className='card'>
        <Card className='cardcontent' sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography sx={{color:"white"}} variant="h5" component="div">
          {random.text}
        </Typography>
        <Typography sx={{ mb: 1.5 ,color:"white"}} className="author" color="text.secondary">
         {random.author}
        </Typography>
       
      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>
       
        </div>
        <div className='inputselector'>
        {/* <Form style={{width:"100%"}}>
        <Form.Group  style={{marginTop:20}}>
        <Form.Control
          as="select" 
          id="Status"
          type="text">
            <option value="Started">None</option>
          <option value="Started">Started</option>
          <option value="Completed">Completed</option>
        
        </Form.Control>
      </Form.Group>  
      </Form> */}
      <Button onClick={handleClick}>Next Quote</Button>

        </div>
    </div>
  )
}

export default Home