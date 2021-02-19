import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TestCasesList from './TestCasesList'
import CreateTag from './CreateTag'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))


const createTag = (name, description, isNew) => {
    return { name, description, isNew}
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

const levels =[
    'Muito Fácil',
    'Fácil',
    'Médio',
    'Difícil',
    'Muito Difícil',
]

const createTestCase = (name, stdin, stdout, visibility) => {
    return { name, stdin, stdout, stdout, visibility }
}

const CreateProblemScreen = props => {
    const classes = useStyles()

    const [tags, setTags] = useState([])
    const [tag, setTag] = useState('')
    const [level, setLevel] = useState('')
    const [title, setTitle] = useState('')
    const [enunciated, setEnunciated] = useState('')
    const [dialog, setDialog] = useState(false)

    const [visibility, setVisibility] = useState(false)
    const [stdin, setStdin] = useState('')
    const [stdout, setStdout] = useState('')
    const [testCaseName, setTestCaseName] = useState('')
    const [addedTestCases, setAddedTestCases] = useState([])

    const saveProblem = () => {
        const newTags = tags.filter((tag)=>{
            return tag.isNew === true
        })
        const problem = {
            title: title,
            enunciated: enunciated,
            level: level,
            newTags: newTags,
            selectedTag: tag,
            testCases: addedTestCases,
        }
        axios({
            method:'post',
            url:'https://ahdahld',
            data: problem
            // headers:{"x-access-token": token}
        })
    }
    const levelHandler = event =>{
        setLevel(event.target.value)
    }
    const titleHandler = event => {
        setTitle(event.target.value)
    }
    const enunciatedHandler = event => {
        setEnunciated(event.target.value)
    }
    const addTestCaseHandler = () => {
        setAddedTestCases(prevTests => [
            ...prevTests, createTestCase(testCaseName, stdin, stdout, visibility)
        ])
        setVisibility(false)
        setStdout('')
        setStdin('')
        setTestCaseName('')
    }
    const removeTestCases = (index) => {
        setAddedTestCases(addedTestCases.filter((test) => {
            return addedTestCases.indexOf(test) !== index
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
        const newTag = createTag(tagName, tagDescription, true)
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
                <TextField
                    onChange={titleHandler}
                    value={title}
                    label='Title'
                />
            
            </Grid>
            <Grid item>
                <FormControl>
                    <InputLabel>Nível</InputLabel>
                    <Select
                        value={level}
                        onChange={levelHandler}
                        MenuProps={MenuProps}
                    >
                        {
                            levels.map((level, index)=>(
                                <MenuItem key={index} value={level}>{level}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
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
                    onChange={enunciatedHandler}
                    value={enunciated}
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
                <TestCasesList tests={addedTestCases} onRemove={removeTestCases} />
            </Grid>
            <Grid item>
                <Button
                    onClick={saveProblem}
                    variant='outlined'
                >
                    Save
                </Button>
                <Button variant='outlined'>Cancel</Button>
            </Grid>
        </Grid>
    )
}

export default CreateProblemScreen