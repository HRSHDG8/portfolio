import {Grid} from "@mui/material";
import {grey, orange} from '@mui/material/colors'
import {PaintedText} from "../Text/Painted";

export const Right = () => {
    return <Grid item xs={12} sm={7} md={8} lg={9}>
        <div style={{padding: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={4} style={{textAlign: 'center'}}>
                    <PaintedText color={orange} size={'1.5em'} bold>
                        4+
                    </PaintedText>
                    <PaintedText color={grey}>
                        Years of Experience
                    </PaintedText>

                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={4} style={{textAlign: 'center'}}>
                    <PaintedText color={orange} size={'1.5em'} bold>
                        30+
                    </PaintedText>
                    <PaintedText color={grey}>
                        Projects
                    </PaintedText>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={4} style={{textAlign: 'center'}}>
                    <PaintedText color={orange} size={'1.5em'} bold>
                        3
                    </PaintedText>
                    <PaintedText color={grey}>
                        Excellence Award
                    </PaintedText>
                </Grid>

            </Grid>
        </div>
    </Grid>
}