import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextareaAutosize, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const CreateSolutionPlainText = props => {
    
    const {
        language,
        languageList,
        changeLanguage,
        script,
        changeScript,
        submmitSolution,
        runSolution
    } = props
    const classes = useStyles()

    const changeLanguageHandler = event => {
        changeLanguage(event.target.value)
    }
    const changeScriptHandler = event =>{
        changeScript(event.target.value)
    }

    return (
        <Grid container direction='column'>
            <Grid item>
                <FormControl>
                    <InputLabel>Linguagem</InputLabel>
                    <Select
                        value={language}
                        MenuProps={MenuProps}
                        onChange={changeLanguageHandler}
                    >
                        {
                            languageList.map((language, index) => (
                                <MenuItem key={index} value={language} >{language.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <TextareaAutosize
                    rowsMin={5}
                    onChange={changeScriptHandler}
                    value={script}
                >
                </TextareaAutosize>
            </Grid>
            <Grid item>
                <Grid container direction='row' spacing={1}>
                    <Grid item>
                        <Button variant='outlined' onClick={submmitSolution}>Submeter</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='outlined' onClick={runSolution} >Rodar</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CreateSolutionPlainText