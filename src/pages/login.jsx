import {Container,Paper,Typography,TextField} from '@mui/material'
const Login = () => {
  return (
   <Container sx={{display:"grid",placeItems:"center"}}>
    <Paper>
        <Typography>
            Welcome 
        </Typography>
        <TextField name="email" label="Email" />
    </Paper>
   </Container>
  )
}

export default Login
