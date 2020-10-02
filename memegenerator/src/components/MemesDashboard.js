import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 300,
     
    },
    button:{
        margin:'20px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    link:{
        textDecoration:'none',
      
        fontWeight:'bold'
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
    const handleClick=(name)=>{
        alert(`You clicked the Meme ${name}`)
    }
    if(props.loading){
        return <h1>Wait a second we are Loading</h1>
    }
    else
    {
        return (
            <div style={divStyle} className="container">
                <Grid container spacing={3} className="row">
                     {props.memes.map(meme=>{
                         return(
                
                           <Grid item xs={4} key={meme.id} className="col-xs-3">
                                 <Card className={classes.root}>
                                    <CardActionArea>
                                          <CardMedia
                                             className={classes.media}
                                             image={meme.url}
                                             height="100%"
                                             width={meme.width}
                                             title="Contemplative Reptile"
                                    />
                                    </CardActionArea> 
                                    <div style={btnStyle}>
                                        <center>
                                         <Button onClick={()=>handleClick(meme.name)}className={classes.button} variant="contained" color="primary" ><Link className={classes.link} to={`/${meme.id}/${meme.box_count}`}>Develop</Link></Button>
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

}
