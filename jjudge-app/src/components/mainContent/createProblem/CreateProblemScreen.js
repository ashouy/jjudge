import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TestCasesList from './TestCasesList'
import CreateTag from './CreateTag'

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
const createTag = (name, description) => {
    return { name, description }
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const createTestCase = (name, stdin, stdout, visibility) =>{
    return {name, stdin, stdout, stdout, visibility}
}

const CreateProblemScreen = props => {
    const [tags, setTags] = useState([])
    const classes = useStyles()
    const [visibility, setVisibility] = useState(false)
    const [stdin, setStdin] = useState('')
    const [stdout, setStdout] = useState('')
    const [testCaseName, setTestCaseName] = useState('')
    const [tag, setTag] = useState('')
    const [dialog, setDialog] = useState(false)
    const [addedTestCases, setAddedTestCases] = useState([])

    const addTestCaseHandler = () => {
        setAddedTestCases(prevTests => [
            ...prevTests, createTestCase(testCaseName, stdin, stdout, visibility)
        ])
        setVisibility(false)
        setStdout('')
        setStdin('')
        setTestCaseName('')
    }
    const removeTestCases = (index) =>{
        setAddedTestCases(addedTestCases.filter((test)=>{
            return addedTestCases.indexOf(test) != index
        }))

    }
    const stdinHandler = event => {
        setStdin(event.target.value)
    }
    const stdoutHandler = event => {
        setStdout(event.target.value)
    }
    const testCaseNameHandler = event => {
        setTestCaseName(event.target.value)
    }
    const openDialogHandler = () => {
        setDialog(true)
    }
    const closeDialogHandler = () => {
        setDialog(false)
    }
    const saveTagHandler = (tagName, tagDescription) => {
        const newTag = createTag(tagName, tagDescription)
        setTags(prevTags => [
            ...prevTags, newTag
        ])
        setDialog(false)
    }
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
                        MenuProps={MenuProps}
                    >
                        {
                            tags.map((tag, index) => (
                                <MenuItem key={index} value={tag.name} >{tag.name}</MenuItem>
                            ))}
                    </Select>
                </FormControl>
                <Button
                    style={{ marginLeft: '8px' }}
                    variant='outlined'
                    onClick={openDialogHandler}
                >
                    New Tag
                </Button>
            </Grid>
            <CreateTag
                open={dialog}
                handleClose={closeDialogHandler}
                saveTag={saveTagHandler}
            />
            <Grid item>
                <TextField
                    label='Enunciated'
                    fullWidth
                    variant='outlined'
                    multiline
                    rows={5}
                />
            </Grid>
            <Divider />
            <Grid item>
                <Typography>Test Cases</Typography>
                <Grid
                    container
                    direction='column'
                    spacing={2}
                    justify='flex-start'
                    alignItems='stretch'
                >
                    <Grid item>
                        <TextField
                            value={testCaseName}
                            onChange={testCaseNameHandler}
                            label='Name'
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            value={stdin}
                            onChange={stdinHandler}
                            label='Stdin'
                            fullWidth
                            variant='outlined'
                            multiline
                            rows={3}

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            value={stdout}
                            onChange={stdoutHandler}
                            label='Expected Stdout'
                            fullWidth
                            variant='outlined'
                            multiline
                            rows={3}
                        />
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
                        <Button
                            variant='outlined'
                            onClick={addTestCaseHandler}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            <Grid item>
                <Typography>Casos de Teste Adicionados</Typography>
                <TestCasesList tests={addedTestCases} onRemove={removeTestCases}/>
            </Grid>
            <Grid item>
                <Button variant='outlined'>Save</Button>
                <Button variant='outlined'>Cancel</Button>
            </Grid>
        </Grid>
    )
}

export default CreateProblemScreen