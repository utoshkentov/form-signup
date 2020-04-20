import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import React, {useState} from 'react';

import {
    AppBar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@material-ui/core';
import {Home, VerifiedUserOutlined} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu'
import Button from "@material-ui/core/Button";


//CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#d4876a',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'white'
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <VerifiedUserOutlined/>,
        listText: 'SignUp',
        listPath: '/signup'
    },

]

const Navbar = (props) => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    const classes = useStyles()

    const slidList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box component="nav">
                <AppBar position='static' style={{background: "#222"}}>
                    <Toolbar>
                        <div style={{display: "flex", flexDirection: 'row'}}>
                            <IconButton onClick={toggleSlider('right', true)}>
                                <MenuIcon style={{color: 'tomato'}}/>
                            </IconButton>
                            <Typography variant='h5' style={{color: 'tan', marginTop: '7px'}}>
                                <Link to='/'>Home</Link>
                            </Typography>
                            <Typography variant='body2' style={{color: '', marginTop: '7px', marginLeft: '10px'}} color='inherit'>
                                <Button startIcon={<VerifiedUserOutlined />} variant='outlined' color='secondary'>
                                    <Link to='/signup' style={{color: 'tan'}}>SignUp</Link>
                                </Button>
                            </Typography>
                            <MobilRightMenuSlider
                                anchor='right'
                                open={state.right}
                                onClose={toggleSlider('right', false)}
                            >
                                {slidList('right')}
                            </MobilRightMenuSlider>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
        ;
}

export default Navbar;