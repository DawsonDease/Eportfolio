import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';


let technologies = [
    {name:"Reactjs", photo:"React"},
    {name:"PHP", photo:"php"},
    {name:"C++", photo:"C++"},
    {name:"C#", photo:"C"},
    {name:"html/css/js", photo:"html"},
    {name:"aws", photo:"AWS"},
    {name:"python", photo:"Python"},
    {name:"java", photo:"java"},
    {name:"Oracle", photo:"oracle"},
    {name:"Mongo", photo:"Mongo"},
    {name:"Swift", photo:"Swift"},
    {name:"Unity", photo:"Unity"},


    
]
const Technologies = () =>{
    return(
        technologies.map((tech)=>
            
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <img src={require(`../imgs/${tech.photo}.png`)} width='50%'></img>
        </Grid>
        
        
         )
    )
}

export default Technologies;