import { Box, Button, createTheme, CssBaseline, Grid, Paper, TextField, ThemeProvider, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/logo.png"

const defaultTheme = createTheme({
    gradients: {
        primary: 'linear-gradient(to right, #4332e9, #6e9336)',
    },
});

const Login = (props) => {
    const [userNameError, setUserNameError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('username'))
        console.log(data.get('password'))
        console.log((userNameError !== '' && passwordError !== ''))
        if (data.get('username') === '') {
            setUserNameError("Please Enter User Name");
        } else {
            setUserNameError(null)
        }

        if (data.get('password') === '') {
            setPasswordError("Please Enter Password");
        } else {
            setPasswordError(null)
        }


        if (userNameError !== '' && passwordError !== '') {

        }
    };
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Box sx={{ display: 'flex' }}>
                    <Grid
                        container
                        component="main"
                        sx={{
                            background: 'linear-gradient(313deg, rgba(90,185,193,1) 1%, rgba(235,240,218,1) 48%, rgba(255,255,255,1) 100%, rgba(30,30,30,1) 100%, rgba(30,30,30,1) 100%)',
                            minHeight: '100vh', // Ensures full height of the viewport
                            justifyContent: { xs: 'center', md: 'flex-start' }, // Center on small screens
                            alignItems: { xs: 'center', md: 'flex-start' },     // Center on small screens
                            padding: { xs: 2, md: 0 },                          // Add padding on smaller screens
                        }}
                    >
                        <CssBaseline />
                        <Grid
                            m={2}
                            container
                            spacing={2}
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <Grid item xs="2" sm="2" md="3">

                                <img 
                                    alt="LOGO"
                                    src={logo}
                                    style={{
                                        width: '40%',   // Set the width to 'auto' to fit the image within the Toolbar
                                        height: 'auto', // Set the height to '100%' to maintain the aspect ratio
                                    }}></img>
                            </Grid>
                            <Grid item xs="2" sm="2" md="3">
                                <Typography variant="h4" component="h2">Identify risks, ensure business success.</Typography>
                            </Grid>
                            <Grid item xs={8} sm={8} md={5} >
                                <Box
                                    component={Paper} elevation={6}
                                    sx={{
                                        p: 4,
                                        m: 2,
                                        borderRadius: '30px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        //  height: '50%', // Set the desired height
                                    }}
                                >

                                    <Grid>
                                        <Typography component="h4" variant="h4">
                                            Log in
                                        </Typography>

                                        <Box
                                            sx={{

                                                width: '100%',
                                                height: '4px',
                                                background: defaultTheme.gradients.primary, // Example gradient
                                            }}
                                        />
                                    </Grid>

                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            size="small"
                                            required
                                            fullWidth
                                            id="username"
                                            label="User Name"
                                            name="username"
                                            error={Boolean(userNameError)}
                                            helperText={userNameError}
                                            autoComplete="username"
                                            autoFocus
                                        />
                                        <TextField
                                            margin="normal"
                                            size="small"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            error={Boolean(passwordError)}
                                            helperText={passwordError}
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />


                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                mt: 8,
                                                width: '30%',
                                                mb: 2,
                                                background: defaultTheme.gradients.primary,
                                                transition: 'transform 0.3s ease', // Smooth transition for the transform effect
                                                '&:hover': {
                                                    background: defaultTheme.gradients.secondary, // Hover background color
                                                    transform: 'scale(1.1)', // Scale up by 10%
                                                }
                                            }}
                                        >Sign In
                                        </Button>



                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Login;
