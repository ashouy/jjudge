import { Button, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, makeStyles, TextareaAutosize, Typography, } from '@material-ui/core'
import React, { useState } from 'react'
import axios from 'axios'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Result from './Result'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 350,
        minHeight: 500,
    },
    textarea: {
        minHeight: 300,
        maxHeight: 500,
        minWidth: 500,
        maxWidth: 700
    },
    title: {
        fontSize: 20
    },
    pos: {
        marginBottom: 12
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}))


const Solution = props => {
    const classes = useStyles()
    const [code, setCode] = useState('')
    const [language, setlanguage] = useState('none')
    const [open, setOpen] = useState(false)
    const [resultExpand, setResultExpand] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [result, setResult] = useState([])
    const [load, setLoad] = useState(false)


    const handleExpandClick = () => {
        setResultExpand(!resultExpand);
    }
    const openExpandClick= () =>{
        setResultExpand(true)
    }
    const changeLenguageHandler = (event) => {
        setlanguage(event.target.value)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const runCodeHandler = () => {
        openExpandClick()
        setSubmit(false)
        const data = {
            codigo: code,
            questionId: props.questionId,
            language: language,
            submit: false
        }

        axios.post("http://localhost:3001/createSolution", data)
            .then(function (response) {
                console.log(response.data)
                setResult(response.data)
                console.log(result)
                setLoad(true)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const submitCodeHandler = () => {
        openExpandClick()
        setSubmit(true)
        const data = {
            codigo: code,
            questionId: props.questionId,
            language: language,
            submit: true
        }
        axios.post("http://localhost:3001/createSolution", data)
            .then(function (response) {
                console.log(response.data)
                setResult(response.data)
                console.log('result')
                console.log(result)
                setLoad(true)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const changeCodeHandler = (event) => {
        setCode(event.target.value)
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                title="Solution"
                action={
                    <FormControl className={classes.formControl}>
                        <InputLabel id="languages">Languages</InputLabel>
                        <Select
                            labelId="languages"
                            id="open-languages"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={language}
                            onChange={changeLenguageHandler}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='nodejs'>Javascript</MenuItem>
                            <MenuItem value='java'>Java</MenuItem>
                            <MenuItem value='C++'>C++</MenuItem>
                        </Select>
                    </FormControl>
                }
                subheader={language}
            />

            <CardContent>
                <TextareaAutosize className={classes.textarea}
                    onChange={changeCodeHandler}
                    placeholder="enter code here"
                >
                </TextareaAutosize>
            </CardContent>
            <CardActions >
                <Button
                    onClick={runCodeHandler}
                    variant="contained"
                    size="small"
                    color="primary">
                    Run
                </Button>

                <Button
                    onClick={submitCodeHandler}
                    variant="contained"
                    size="small"
                    color="primary">
                    Submit
                </Button>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: resultExpand,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={resultExpand}
                    aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={resultExpand} timeout="auto" unmountOnExit>
                <CardContent>
                    {load
                        ? <Typography>{result.output}</Typography>
                        : <Typography>loading...</Typography>
                    }
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default Solution