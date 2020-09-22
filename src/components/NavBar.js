import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const StyledGrid = styled(Grid)`
    top:0;
    background-color: #7e8a97;

`
const useStyles = makeStyles({
    root: {
        fontSize: 'large',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '20px 70px',
        
     
     

    },
    label: {
      textTransform: 'capitalize',
    },
  });

const NavBar = () =>{
    const classes = useStyles();
    return(
        <React.Fragment>
           
                <StyledGrid container direction="row" justify="center"  >
                    <Grid >
                        <Button classes={{
                            root: classes.root, 
                            label: classes.label, 
                        }} href="#about">About Me</Button>
                    </Grid>
                    <Grid >
                        <Button classes={{
                            root: classes.root, 
                            label: classes.label, 
                        }} href="#projects">Projects</Button>
                    </Grid>
                    <Grid >
                        <Button classes={{
                            root: classes.root, 
                            label: classes.label, 
                        }}href="#tech">Technologies</Button>
                    </Grid>
                    <Grid >
                        <Button classes={{
                            root: classes.root, 
                            label: classes.label, 
                        }}href="#contact">Contact</Button>
                    </Grid>
                    
                </StyledGrid>
         
        </React.Fragment>
    )
}

export default NavBar;