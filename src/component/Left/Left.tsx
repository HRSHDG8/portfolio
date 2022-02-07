import hmac from "../../images/hmacsq.jpg";
import React from "react";
import {styled} from "@mui/material/styles";
import {SpeedDial} from "@mui/material";
import {Email, GitHub, LinkedIn, Phone} from '@mui/icons-material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

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
    {icon: <Phone/>, name: 'Phone', link: 'tel:5558920234'},
];

export const Left = () => {
    const handleSpeedDialClick = (link: string) => {
        window.open(link, '_blank')
    }
    return <div style={{display: "flex", flexDirection: 'column', height: '100%'}}>
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
                ariaLabel="SpeedDial playground example"
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