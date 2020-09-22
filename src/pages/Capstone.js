import React from 'react';
import CenterContainer from '../components/CenterContainer';
import GlobalStyles from '../components/globalStyles';
import Navbar from '../components/NavBar';


const Capstone = () =>{
    
    
    return(
        <React.Fragment>
            <GlobalStyles />
            <Navbar />
            <CenterContainer>
                <h1>ICS Capstone 2020 Website</h1>
                <p>At the end of Camosun's 2 year ICS program the students are required to hold a symposium and show off their capstone projects they worked on for three months.
                    My job for the symposium was to lead a team of developers to create a website to showcase each teams project and host their final presentations.
                    As a team we decided the most simple solution was to create the webpage with PHP, Javascript and Bootstrap for the css framework. 
                    Below are a few Screem Shots of the Homepage:
                </p>
                <hr />
                <p>This is the first thing the user see when entering the page. ;iahs;jhfdohadsf'okhfakhfhfa</p>
                <img src={require(`../imgs/Capstone-Imgs/Cap-Home.png`)} width='100%' /> 
                <p> Each Team had their own team page to showcase their project to potential employers on the day of the symposium. 
                    We used Bootstrap's cards to display each team's sponsor and a brief summary of the project on each card. The link on each
                    card will go to the team page. We used a php loop to display all the cards in a row.</p>
                <img src={require(`../imgs/Capstone-Imgs/Cap-Home2.png`)} width='100%' /> 
                <p></p>
                <img src={require(`../imgs/Capstone-Imgs/Cap-Home3.png`)} width='100%' /> 
                
            </CenterContainer>
        </React.Fragment>
    )
}

export default Capstone;