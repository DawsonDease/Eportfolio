import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';


let projects = [
    {name:"IndyKey", photo:"IndyKey", link:"http://app.indykey.com/"},
    {name:"Capstone website", photo:"Capstone", link:"http://capstone.camosun.ca/archived-capstone/June2020/public/ICS.php"},
]
const Projects = () =>{
    return(
        projects.map((project)=>
            <Grid item xs={12}>
                <Card >
                    <CardActionArea>
                    <Link href={project.link}>
                        <CardMedia
                            style = {{ height:300}}
                            image = {require(`../imgs/${project.photo}.png`)}
                            title = {project.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align='center'>
                        {project.name}
                        </Typography>
                        </CardContent>
                        </Link>
                    </CardActionArea>
                </Card>
            </Grid>
           
           

        )
    )
}

export default Projects;