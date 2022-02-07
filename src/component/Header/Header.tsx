import React, {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import {useTheme} from "../theme/Theme";

export const Header: FC = () => {
    const { theme, setTheme } = useTheme();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Harsh Maheshwari
                </Typography>
                <Switch checked={theme==='dark'} onClick={()=>{setTheme(theme==='dark' ? 'light': 'dark')}}/>
            </Toolbar>
        </AppBar>
    );
}
