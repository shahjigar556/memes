import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
    },
    button:{
        margin:'20px'
    },
    link:{
        textDecoration:'none',
        color:'black'
    }
  });
export default function MemesDashboard(props) {
    const classes=useStyles();
    const divStyle={
        paddingLeft:'20px',
        marginBottom:'10px'
    }
    const btnStyle={
        backgroundColor:'#D3D3D3'
    }
    return (
        <div style={divStyle}>
            <Grid container spacing={2}>
                 {props.memes.map(meme=>{
                     return(
                       <Grid item xs={6}>
                             <Card className={classes.root}>
                                <CardActionArea>
                                      <CardMedia
                                         className={classes.media}
                                         image={meme.url}
                                         height="100%"
                                         title="Contemplative Reptile"
                                />
                                </CardActionArea> 
                                <div style={btnStyle}>
                                    <center>
                                     <Button className={classes.button} variant="contained" color="primary" href="#contained-buttons"><Link className={classes.link} to={`/${meme.id}/${meme.box_count}`}>Develop</Link></Button>
                                    </center>
                                </div>
                            </Card>
                       </Grid>
                     )
                 })}
            </Grid>
        </div>
    )
}
