import React from "react";
import Link from 'next/link'
import Layout from '../components/Layout'
// @ts-ignore
import config from '../config/config'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            // textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

const Dashboard = () => {
    const classes = useStyles();
    return (
        <Layout title={"Dashboard"}>
            {/*<Container>*/}
            {/*    <Box my={4}>*/}
            {/*        <Typography variant="h4" component="h1" gutterBottom>*/}
            {/*            Dashboard*/}
            {/*        </Typography>*/}
            {/*        <Box>*/}

            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</Container>*/}

            <Typography variant="h4" component="h1" gutterBottom>
                Dashboard
            </Typography>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <Link href={'/'}>
                            <Paper className={classes.paper}>
                                Logbook
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Paper className={classes.paper}>
                            Brieffing
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Paper className={classes.paper}>

                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default Dashboard