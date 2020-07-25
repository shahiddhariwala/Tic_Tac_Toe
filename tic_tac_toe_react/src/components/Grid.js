import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from "./grid.module.css";
import cross from "../assets/cross.png";
import circle from "../assets/circle.png";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
},
    paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    elevation: "3",
},
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <Container maxWidth="sm" className={styles.BoardBox}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={4} zeroMinWidth >
                        <Paper className={classes.paper} ><img src={cross} height="55em" width="55em" /></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><img src={cross} height="55em" width="55em" /></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><img src={cross} height="55em" width="55em" /></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><img src={circle} height="55em" width="55em" /></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><img src={cross} height="55em" width="55em" /></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><img src={cross} height="55em" width="55em" /></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><img src={cross} height="55em" width="55em" /></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><img src={circle} height="55em" width="55em" /></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}><img src={circle} height="55em" width="55em" /></Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
