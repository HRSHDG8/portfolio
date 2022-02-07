import hmac from "../../images/hmacsq.jpg";
import React from "react";
import {styled} from "@mui/material/styles";
import {Fab, Grid, SpeedDial, Typography} from "@mui/material";
import {DarkMode, Email, GitHub, LightMode, LinkedIn, Phone, Settings} from '@mui/icons-material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {useTheme} from "../theme/Theme";
import {grey} from "@mui/material/colors";
import {PaintedText} from "../Text/Painted";
import { Divider } from '@mui/material';

const StyledSpeedDial = styled(SpeedDial)(({theme}) => ({
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const actions = [
    {icon: <LinkedIn/>, name: 'LinkedIn', link: 'https://www.linkedin.com/in/hmacmaheshwari/'},
    {icon: <GitHub/>, name: 'Github', link: 'https://github.com/HRSHDG8'},
    {icon: <Email/>, name: 'Email', link: 'mailto:hrshdg8@gmail.com'},
    {icon: <Phone/>, name: 'Phone', link: 'tel:8783485242'},
];

export const Left = () => {
    const {theme, setTheme} = useTheme();
    const isLight = theme === 'light'
    const handleSpeedDialClick = (link: string) => {
        window.open(link, '_blank')
    }
    return <Grid item xs={12} sm={5} md={4} lg={3}
                 style={{
                     boxShadow: isLight ? "rgb(136 136 136) 1px 0px 8px -2px" : "rgb(10 10 10) 1px 0px 8px -2px",
                     background: isLight ? 'rgb(238 238 238 / 42%)' : 'rgb(60,60,60)',
                 }}>
        <div style={{display: "flex", flexDirection: 'column', height: '100%'}}>
            <div style={{position: 'absolute', top: 10, right: 10}}>
                <StyledSpeedDial
                    ariaLabel="SpeedDial playground example"
                    icon={<Settings fontSize={'small'}/>}
                    direction={'down'}
                    FabProps={{size: 'small', color: isLight ? 'inherit' : 'default'}}
                    style={{float: 'right'}}
                >
                    <SpeedDialAction
                        FabProps={{size: 'small', color: isLight ? 'inherit' : 'default'}}
                        icon={isLight ? <LightMode fontSize={"small"} /> :
                            <DarkMode fontSize={"small"} />}
                        tooltipTitle={'Theme'}
                        onClick={() => setTheme(isLight ? 'dark' : 'light')}
                    />
                </StyledSpeedDial>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                boxShadow: isLight ? "rgb(136 136 136) 0px 2px 8px -2px" : "rgb(10 10 10) 0px 2px 8px -2px",
                padding: 20,
                background: isLight ? '#fff' : 'rgb(30 30 30)'
            }}>
                <div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={hmac} alt={"my-profile"}
                             style={{maxHeight: 120, maxWidth: 120, borderRadius: '50%'}}/>
                    </div>
                    <div style={{textAlign: 'center', fontSize: '2em'}}>
                        <PaintedText color={grey}>
                            Harsh Maheshwari
                        </PaintedText>
                    </div>
                    <div style={{textAlign: 'center', fontSize: '1em'}}>
                        <Typography >Full Stack Developer</Typography>
                    </div>
                </div>
            </div>

            <div style={{padding: '10px 20px'}}>
                <Divider/>
            </div>
            <div style={{padding: '0 20px', display: "flex", justifyContent: 'center'}}>
                <div style={{width: 300, lineHeight: '30px'}}>
                    <div style={{display: 'flow-root'}}>
                        <div style={{float: 'left'}}>
                            Residence
                        </div>
                        <div style={{float: 'right'}}>
                            United States
                        </div>
                    </div>
                    <div style={{display: 'flow-root'}}>
                        <div style={{float: 'left'}}>
                            City
                        </div>
                        <div style={{float: 'right'}}>
                            San Diego
                        </div>
                    </div>

                    <div style={{display: 'flow-root'}}>
                        <div style={{float: 'left'}}>
                            Age
                        </div>
                        <div style={{float: 'right'}}>
                            27
                        </div>
                    </div>
                </div>
            </div>

            <div style={{padding: '10px 20px'}}>
                <Divider/>
            </div>


            <div style={{
                padding: 10,
                marginTop: 'auto'
            }}>
                <StyledSpeedDial
                    ariaLabel="SpeedDial"
                    icon={<Fab><SpeedDialIcon/></Fab>}
                    direction={'left'}
                >
                    {actions.map(({icon, name, link}) => (
                        <SpeedDialAction
                            key={name}
                            icon={icon}
                            tooltipTitle={name}
                            onClick={() => handleSpeedDialClick(link)}
                        />
                    ))}
                </StyledSpeedDial>
            </div>
        </div>
    </Grid>
}