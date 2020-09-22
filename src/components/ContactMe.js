import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const ContactMe = () =>{

    return(
        <Grid container direction="column" justify="center">
            <form>
            <Grid item>
                <TextField id="outlined-basic" label="Name" variant="outlined"  />
            </Grid>
            <Grid item>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Grid>
            <Grid item>
                <TextField id="outlined-basic" label="Description Of Project" variant="outlined" />
            </Grid>
            </form>
        </Grid>
    )
}

export default ContactMe;