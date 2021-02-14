import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TestCasesList from './TestCasesList'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

const options = [
    'grafos',
    'vetores',
    'arrays',
    'struct',
    'matriz',
    'programação funcional',
    'pilha',
    'fila',
];
const CreateProblemScreen = props => {
    const classes = useStyles()
    const [visibility, setVisibility] = useState(false)
    const [tag, setTag] = useState('')

    const changeVisibilityHandler = event => {
        setVisibility(event.target.checked)
    }
    const changeTagHandler = event => {
        setTag(event.target.value)
    }
    return (
        <Grid
            container
            direction='column'
            spacing={2}
            className={classes.root}
        >
            <Grid item>
                <TextField label='Title' />
            </Grid>
            <Grid item>
                <FormControl>
                    <InputLabel>Tag</InputLabel>
                    <Select
                        value={tag}
                        onChange={changeTagHandler}
                    >
                        {options.map((tag, index) => (
                            <MenuItem key={index} value={tag} >{tag}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <TextField label='Enunciated' />
            </Grid>
            <Select>

            </Select>
            <Grid item>
                <Typography>Test Cases</Typography>
                <Divider />
                <Grid
                    container
                    direction='row'
                    spacing={2}
                    justify='flex-start'
                    alignItems='center'
                >
                    <Grid item>
                        <TextField label='Name' />
                    </Grid>
                    <Grid item>
                        <TextField label='Stdin' />
                    </Grid>
                    <Grid item>
                        <TextField label='Expected Stdout' />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={visibility}
                                    onChange={changeVisibilityHandler}
                                    name='visibilityBtn'
                                    color='primary'
                                />
                            }
                            label='Visível'
                        />
                    </Grid>
                    <Grid item>
                        <Button variant='outlined'>Add</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <TestCasesList />
            </Grid>
            <Grid item>
                <Button variant='outlined'>Save</Button>
                <Button variant='outlined'>Cancel</Button>
            </Grid>
        </Grid>
    )
}

export default CreateProblemScreen