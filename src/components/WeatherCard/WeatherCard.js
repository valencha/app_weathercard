import React from 'react';
import {Card, CardContent, makeStyles} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useSpring, animated } from 'react-spring';
import { flexbox } from '@material-ui/system';
import { parseTwoDigitYear } from 'moment';
import { bold, black } from 'ansi-colors';



function WeatherCard (props){
    
    const classes = useStyles();
    const current = currentCard();
    var colorTheme = classes;
    
    var myDate = new Date();
    var date = myDate.getDay();
    
    
    switch (date) {
        
        case 1:
        Date= 'lun.'
        break;
        
        case 2:
        date ='mar.'
        break;
        case 3:
        date ='mié.'
        break;
        case 4:
        date ='jue.'
        break;
        case 5:
        date ='vie.'
        break;
        case 6:
        date ='sáb.'
        break;
        
        
        
        
    }
    
    
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    if( date=== props.day){
        colorTheme = current;
    }
    
    return (<Card onClick={handleOpen} className= {colorTheme.general}>
        
        <CardContent className= {colorTheme.content}>
        <h3 className= {colorTheme.title} >{props.day}</h3>
        <img className= {colorTheme.img} src={props.icon}/>
        <p className= {colorTheme.info}> <span>{props.max}</span>{props.min}</p>
        </CardContent>
        
        <div >
        
        <Modal 
        aria-labelledby="spring-modal-title"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        >
        <div onClick={handleClose} >
        <Fade in={open}>
        <ClickAwayListener onClickAway={handleClose}>
        
        <div className={colorTheme.paper}onClick={handleClose}>
      
        <section className={classes.principalInfo}>
        <div> <img className= {classes.img} src={props.icon}/></div>
        <div>
        <h1 className= {colorTheme.title} >{props.modalDay}</h1>   
        <h2 className= {colorTheme.title}  >{props.modalCity}, {props.modalCountry}</h2>
        </div>
        
        </section>
        <section>
        <p ><span className= {colorTheme.subtitle} >Temp Min:</span>{props.modalMin}</p>
        <p><span className= {colorTheme.subtitle} >Temp Max:</span>{props.modalMax}</p>
        <p><span className= {colorTheme.subtitle} >Velocidad del viento:</span>{props.modalSpeed}</p> 
        <p><span className= {colorTheme.subtitle} >Nivel de mar:</span> {props.modalSeaLevel}</p>
        <p><span className= {colorTheme.subtitle} >Presión atmósferica:</span> {props.modalPressure}</p>
        <p><span className= {colorTheme.subtitle} >Dirección del viento: </span>{props.modalDeg}</p>
        <p><span className= {colorTheme.subtitle} >Humedad:</span> {props.modalHumidity}</p>
        <p><span className= {colorTheme.subtitle} >Presión atmosférica sobre el nivel del suelo:</span> {props.modalGrndLevel}</p>
        
        <p> <span className= {colorTheme.subtitle} >Descripción del clima:</span> { props.modalDescription}</p>
        </section>
        </div>
        </ClickAwayListener>
        </Fade>
        </div>
        </Modal>
        
        </div>
        
        </Card>
        
        );
        
        
    }
    const currentCard = makeStyles(theme =>({
        principalInfo:{
            
            display:'flex',
            flexDirection: 'column',
            marginRight: 50,
            
        },
        subtitle:{
            fontWeight: 'bold',
            
        },
  
        general:{
            
            backgroundColor: 'orange',
            
        },
        title:{
            color:  'white',
            fontSize: 30,
            margin: 0,
            
        },
      
        content:{
            display: 'flex',
            color:  'white',
            flexDirection: 'column',
            alignItems: 'center',
            
        },
        paper: {
            display:'flex',
            width: 600,
            flexDirection: 'row',
            backgroundColor: 'orange',
            border: 'none',
            borderRadius: 10,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            color: 'white',
            outline:'none',
        },
        
        
    }));
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
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        },
        paper: {
            display:'flex',
            width: 600,
            flexDirection: 'row',
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            borderRadius: 10,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        principalInfo:{
            
            display:'flex',
            flexDirection: 'column',
            marginRight: 50,
            
        },
        subtitle:{
            fontWeight: 'bold',
            
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
    const Fade = React.forwardRef(function Fade(props, ref) {
        const { in: open, children, onEnter, onExited, ...other } = props;
        const style = useSpring({
            from: { opacity: 0 },
            to: { opacity: open ? 1 : 0 },
            onStart: () => {
                if (open && onEnter) {
                    onEnter();
                }
            },
            onRest: () => {
                if (!open && onExited) {
                    onExited();
                }
            },
        });
        
        return (
            <animated.div ref={ref} style={style} {...other}>
            {children}
            </animated.div>
            );
        });
        export default WeatherCard;