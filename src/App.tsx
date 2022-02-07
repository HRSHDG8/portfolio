import React from 'react';
import {Box, Paper} from "@mui/material";
import {useTheme} from "./component/theme/Theme";
import {styled} from '@mui/material/styles'

import Grid from '@mui/material/Grid';
import {Left} from "./component/Left/Left";
import {Right} from "./component/Right/Right";

const prefix = 'HMac-Portfolio'
const classes = {
    root: `${prefix}-root`,
}
const Root = styled(Paper)(({theme}) => ({
    [`&.${classes.root}`]: {
        height: '100vh',
        background: theme.palette.mode === 'dark' ? 'auto' : undefined,
        borderRadius: 0
    },
}))
const App = () => {

    const {theme} = useTheme()
    const isLight = theme === 'light'
    return <Box>
        <Root className={classes.root}>
            <Grid container spacing={2}
                  style={{minHeight: '100vh', background: isLight ? 'rgb(238 238 238 / 42%)' : 'rgb(60,60,60)'}}>
                <Left/>
                <Right/>
            </Grid>
        </Root>
    </Box>
}

export default App;
