import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6, 0),
//   },
// }));

function Footer() {
//   const classes = useStyles();

  return (
    <footer style={{backgroundColor: "yellow", marginTop:"487px", height:"123px"}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Prathi Inti
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
