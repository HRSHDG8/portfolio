import hmac from "../../images/hmacsq.jpg";
import React from "react";
import {styled} from "@mui/material/styles";
import {SpeedDial} from "@mui/material";
import {Email, GitHub, LinkedIn, Phone, Settings, WbSunny, DarkMode, LightMode} from '@mui/icons-material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {useTheme} from "../theme/Theme";

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
    const { theme, setTheme } = useTheme();
    const handleSpeedDialClick = (link: string) => {
        window.open(link, '_blank')
    }
    return <div style={{display: "flex", flexDirection: 'column', height: '100%'}}>
        <div style={{position: 'absolute', top: 10, right: 10}}>
            <StyledSpeedDial
                ariaLabel="SpeedDial playground example"
                icon={<Settings fontSize={'small'}/>}
                direction={'down'}
                FabProps={{size:'small'}}
                style={{float: 'right'}}
            >
                <SpeedDialAction
                    icon={theme==='light'?<LightMode/>:<DarkMode/>}
                    tooltipTitle={'Theme'}
                    onClick={()=>setTheme(theme==='light'?'dark':'light')}
                />
            </StyledSpeedDial>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            boxShadow: "rgb(136 136 136) 0px 2px 8px -2px",
            padding: 20,
            background: '#fff'
        }}>
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={hmac} alt={"my-profile"}
                         style={{maxHeight: 120, maxWidth: 120, borderRadius: '50%'}}/>
                </div>
                <div style={{textAlign: 'center', fontSize: '2em'}}>
                    Harsh Maheshwari
                </div>
                <div style={{textAlign: 'center', fontSize: '1em'}}>
                    Full Stack Developer
                </div>
            </div>
        </div>

        <div style={{padding: '10px 20px 0 20px'}}>
            <hr/>
        </div>
        <div style={{padding: '0 20px', display: "flex", justifyContent: 'center'}}>
            <div style={{width: 300, lineHeight: '30px', color: 'rgba(0,0,0,0.77)'}}>
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

        <div style={{padding: '0 20px'}}>
            <hr/>
        </div>


        <div style={{
            padding: 10,
            marginTop: 'auto'
        }}>
            <StyledSpeedDial
                ariaLabel="SpeedDial"
                icon={<SpeedDialIcon/>}
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
}