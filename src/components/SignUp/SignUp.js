import React from 'react';
import {Form, Formik} from 'formik';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";

const SignUp = () => (
    <Grid xs={4} style={{transform: 'translate(100%, 40%)'}}>
        <Box style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
            <Paper style={{padding: '40px 20px'}}>
                <Typography variant='h5' color='inherit'>
                    Sign Up Page
                </Typography>
                <br/>
                <Divider />
                <br/>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required Email';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required Password'
                        } else if (
                            values.password.length > 15
                        ) {
                            errors.password = 'eng kamida 8 ta harf va son'
                        }

                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <Form onSubmit={handleSubmit}>
                            <TextField
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                variant='outlined'
                                label='Email'
                            />
                            <br/>
                            <Typography color='secondary'>
                                {errors.email && touched.email && errors.email}
                            </Typography>
                            <br/>
                            <TextField
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                variant='outlined'
                                label='Password'
                            />
                            <br/>
                            <Typography color="secondary">
                                {errors.password && touched.password && errors.password}
                            </Typography>
                            <br/>
                            <Button outlined type="submit" disabled={isSubmitting} variant='contained'
                                    color="secondary">
                                <Link to='/'>Sign Up</Link>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Box>
    </Grid>
);

export default SignUp;