import { FormControlLabel, IconButton, Grid, makeStyles, Typography, Paper } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2)
    }
}))

function ListItemLink(props) {
    const { icon, to, id } = props;
    const CustomLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <Link {...linkProps} ref={ref} to={{
                    pathname:to,
                    state:{
                        id:id
                    }
                }}/>
            )),
        [to],
    )
    return (
        <Grid item component={CustomLink}>
            <IconButton>{icon}</IconButton>
        </Grid>
    )
}
const ItemProblem = props => { //problemsData
    const classes = useStyles()

    return (
        <Grid className={classes.root} container direction='column' spacing={1}>
            {props.problemsData.map(problem => {
                return (
                    <Grid item key={problem.id}>
                        <Paper className={classes.paper}>
                            <Grid container justify='space-between' alignItems='center'>
                                <Grid item>
                                    <Typography>
                                        {problem.id}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography>
                                        {problem.title}
                                    </Typography>
                                </Grid>
                                <ListItemLink to="/submitSolution"
                                    icon={<SearchIcon />}
                                    id={problem.id}
                                />
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })
            }
        </Grid>
    )
}

export default ItemProblem