import React from 'react';
import NavBar from '../components/NavBar';
import CenterContainer from '../components/CenterContainer';
import GlobalStyles from '../components/globalStyles';
import Pic from '../imgs/DSC_2215-2.jpg';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Contact from '../components/ContactMe';

const LeftDiv = styled.div`
  
    background: black;
    z-index:1;
    height:100%;
    width:35%;
    opacity: 0.7;
    h1{
        color:white;
    }
`
const Wrapper = styled.div`
    background-image:url(${Pic});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 15% 0px 15% 0px;
    text-align: center;
    align-content: center

   
    
`

const Homepage = () =>{
    return(
        <React.Fragment>
            <GlobalStyles />
            <NavBar />
            <Wrapper>
                    <LeftDiv >
                        <h1>Dawson Dease</h1>
                        <h1>Junior Software Developer</h1>
                    </LeftDiv>
            </Wrapper>
            <CenterContainer>
                <p>Dawson, a recent graduate of the Computer Systems Program at Camosun College, is a hardworking individual with a strong passion to learn new skills pertaining to the tech industry. Since he was little, Dawson has had a powerful connection with the industry, constantly fuelling his passion by dedicating time to learning the necessary skills to gain the competitive advantage over his peers and coworkers. His never ending drive and easy-going, but driven personality make him the perfect candidate for a career in this field. Interested in learning more about careers and opportunities in this field, you can reach Dawson by connecting with him and sending him a message via LinkedIn messaging! </p>
                <h1>Projects</h1>
                <hr />
                <br />
                <Grid container alignItems='center' direction='row' 
                        spacing={4}>
                    <Projects />
                </Grid>
                <h1>Technologies</h1>
                <hr />
                <Grid container direction='row' justify="center"
                        >
                <Technologies />
                </Grid>
                <h1>Contact</h1>
                <hr />
                <Contact />
            </CenterContainer>
        </React.Fragment>
    )
}

export default Homepage;