import React from 'react';
import {Card, CardContent, makeStyles} from '@material-ui/core';
import { flexbox } from '@material-ui/system';



function WeatherCard (props){
    const classes = useStyles();
    
    return (<Card>
        <CardContent className= {classes.content}>
        <h3 className= {classes.title} >{props.day}</h3>
        <img className= {classes.img} src={props.icon}/>
        <p className= {classes.info}> <span>{props.max}</span>{props.min}</p>
        </CardContent>
        
        
        </Card>);
    }
    const useStyles = makeStyles(theme => ({
        title:{
            color:  theme.palette.grey[700],
            fontSize: 30,
            margin: 0,
            
        },
        img: {
            
        },
        content:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        },
        info:{
            margin: 0,
            fontSize: 20,
            color:  theme.palette.grey[500],
            '& span':{
                color: theme.palette.grey[700],
            }
        }
        
    }));
    export default WeatherCard;