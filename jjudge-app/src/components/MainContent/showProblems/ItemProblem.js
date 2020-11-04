import { FormControlLabel,IconButton, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) = ({
    root: {
        flexGrow: 1
    }
}))

const ItemProblem = props => { //problemsData
    const classes = useStyles()

    return (
        <Grid className={classes.root} container direction='column' spacing={1}>
            {props.problemsData.map(problem => {
                return (
                    <Grid item key={problem.id}>
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
                            <Grid item>
                                <IconButton >
                                    <SearchIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })
            }
        </Grid>
    )
}

export default ItemProblem