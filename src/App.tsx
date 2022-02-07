import React from 'react';
import {Box, Paper} from "@mui/material";
import {Theme, useTheme} from "./component/theme/Theme";
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
    return <Theme>
        <Box>
            <Root className={classes.root}>
                <Grid container spacing={2} style={{minHeight: '100vh'}}>
                    <Left/>
                    <Grid item xs={12} sm={7} md={8} lg={9}>
                        <Right/>
                    </Grid>
                </Grid>
            </Root>
        </Box>
    </Theme>
}

export default App;
