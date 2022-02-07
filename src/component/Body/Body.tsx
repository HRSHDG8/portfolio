import {FC} from "react";
import {Card, Typography, Box, CardContent, CardMedia, Slide} from "@mui/material";
import hmac from '../../images/hmac.jpg'
export const Introduction=()=>{
    return <Card sx={{ display: 'flex' }}>
        <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={hmac}
            alt="Harsh M portfolio"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    About Me
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    I'm Harsh a full stack developer
                </Typography>
            </CardContent>
        </Box>
    </Card>
}
export interface SlideInProps{
    direction ?: 'left' | 'right' | 'up' | 'down'
}
export const SliderIn:FC<SlideInProps>=({direction='up', children})=>{
    return <Slide appear={true} in direction={direction} mountOnEnter unmountOnExit>
        {/*@ts-ignore*/}
        {children}
    </Slide>
}
export const Body:FC=()=>{
    return <>
        <SliderIn >
            <Typography>
                Content
            </Typography>
        </SliderIn>
    </>
}