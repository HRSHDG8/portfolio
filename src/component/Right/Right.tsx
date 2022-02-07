import {Card, CardContent, Divider, Grid, Typography} from "@mui/material";
import {grey, orange} from '@mui/material/colors'
import {PaintedText} from "../Text/Painted";
import {AutoIncrement} from "../Text/AutoIncrement";
import React from "react";

export const Right = () => {
    return <Grid item xs={12} sm={7} md={8} lg={9}>
        <div style={{padding: '30px 20px', height: 'calc(100% - 60px)'}}>
            <Grid container spacing={2} style={{marginBottom: 20}}>
                <Grid item xs={12} sm={6} md={6} lg={4} style={{textAlign: 'center'}}>
                    <PaintedText color={orange} size={'1.5em'} bold>
                        <AutoIncrement num={4}/>+
                    </PaintedText>
                    <PaintedText color={grey}>
                        Years of Experience
                    </PaintedText>

                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={4} style={{textAlign: 'center'}}>
                    <PaintedText color={orange} size={'1.5em'} bold>
                        <AutoIncrement num={30} speed={10}/>+
                    </PaintedText>
                    <PaintedText color={grey}>
                        Projects
                    </PaintedText>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={4} style={{textAlign: 'center'}}>
                    <PaintedText color={orange} size={'1.5em'} bold>
                        <AutoIncrement num={3}/>
                    </PaintedText>
                    <PaintedText color={grey}>
                        Excellence Awards
                    </PaintedText>
                </Grid>

            </Grid>
            <div style={{padding: '10px 0'}}>
                <Divider/>
            </div>
            <Typography variant={"h5"} style={{textAlign: 'center'}}>
                Skills
            </Typography>
            <div style={{padding: '10px 0'}}>
                <Divider/>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Software Engineering
                            </Typography>
                            <Typography sx={{fontSize: 14, mb: 1.5}} color="text.secondary">
                                Agile and Full Stack Development
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Well versed with all SDLC lifecycle processes starting from Requirement gathering,
                                Refining, UX designing, UI mocking, Development, Unit testing, Performance testing,
                                Production deployment including creating scalable architectures and zero downtime
                                deployments. I love creating resilient systems
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Frontend Engineering
                            </Typography>
                            <Typography sx={{fontSize: 14, mb: 1.5}} color="text.secondary">
                                Web and Mobile Applications
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Creates responsive and interactive web and mobile apps. Proficient with the Web 2.0
                                Architecture, HTTP model along with REST, WebSockets etc. Specialized in creating apps
                                with JavaScript and its frameworks and advanced concepts of Micro-frontend and theming
                                applications
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Backend Engineering
                            </Typography>
                            <Typography sx={{fontSize: 14, mb: 1.5}} color="text.secondary">
                                APIs and Databases
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Experienced in writing services in Java, Python, Node using various frameworks along
                                with various security models including OAuth, JWT etc. Proficient with ORM libraries as
                                well as native SQL and NoSQL database queries. Expert in writing clean code and figuring
                                out what design patterns suits a given use case.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div style={{padding: '10px 0'}}>
                <Divider/>
            </div>
            <Typography variant={"h5"} style={{textAlign: 'center'}}>
                Recommendations

            </Typography>
            <div style={{padding: '10px 0'}}>
                <Divider/>
            </div>
            <Grid container spacing={2} style={{paddingBottom: 50}}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Vamsi Krishna Sigarambotla
                            </Typography>
                            <Typography sx={{fontSize: 14, mb: 1.5}} color="text.secondary">
                                Senior Software Engineer at U.S. Bank
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I had privilege to work with Harsh. Harsh is one of the finest developers with excellent
                                UI and backend skills. Harsh was a go-to-go guy for any new development and R&D. He took
                                many initiatives to develop utilities which eases the developer life. His logical
                                thinking and grasping power always surprises. He is highly skilled in containerizing
                                apps, building UI frameworks, developer tooling, Spring boot, React, Angular etc(he can
                                master anything). He has excellent problem solving and analytical skills and always
                                delivers quality code. He has good knowledge on all aspects of software development like
                                design, maintainability, security, performance. He is a very good asset for any team. I
                                thoroughly recommend him
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Deepak Girdher
                            </Typography>
                            <Typography sx={{fontSize: 14, mb: 1.5}} color="text.secondary">
                                Director and Co-Founder at Cudents
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I have worked with Harsh for over a year and I am really glad that I got that
                                opportunity. Not only Harsh is very very technically strong but along with that he keeps
                                a futuristic approach also in his work, which make things really easy with the time. And
                                I remember every time I was stuck in my work, I knew there is one person I can rely
                                upon. Apart from that He is a very happy go lucky person and gels up with the team very
                                well and quickly. He is a type of person you would always want in your team.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Shoban Jaligama
                            </Typography>
                            <Typography sx={{fontSize: 14, mb: 1.5}} color="text.secondary">
                                Software Engineer at JPMorgan Chase & Co.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Harsh was one of the best programmers I have worked with in chase. He is a very skilled
                                developer, technically very strong and a go to person for any project related issues in
                                our project. He is a quick learner and developed lot of utility applications using java,
                                react, nodejs and other languages which are useful to other developers. He is expert in
                                both ui and backend technologies. He will be a good asset to any company which employs
                                him. I highly recommend him
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Deepak Tiwari
                            </Typography>
                            <Typography sx={{fontSize: 14, mb: 1.5}} color="text.secondary">
                                SSE at upGrad | Ex JP Morgan x4
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I have worked with Harsh in the same team and I must say he is an exceptional Developer.
                                I know him from past 7 years and can say that you bring any problem to the table ,Harsh
                                would be the first one to pick that up and solve that for you. He has always been an
                                over the ball thinker and has the most unique approach to solve any problem. Harsh was
                                very well known not only in the Team but accross teams and juniors as Mr Goto Solution
                                for any blockers. I personally have learnt a lot from him.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    </Grid>
}