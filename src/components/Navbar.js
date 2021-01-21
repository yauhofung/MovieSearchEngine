import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

import {
    Link
} from "react-router-dom";

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton color="secondary" >
                            <Link to="/" color="primary">
                                <HomeIcon style={{color: 'white'}}/>
                            </Link>
                        </IconButton>
                        <Typography variant='h5' style={{ flexGrow: 1 }}>
                            Movie Search Engine
                        </Typography>

                        <Button color="secondary" variant="contained" >Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;