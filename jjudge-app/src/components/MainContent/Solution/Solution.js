import { Button, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, makeStyles, TextareaAutosize, TextField, Typography, } from '@material-ui/core'
import React, { useEffect, useState, version } from 'react'
import axios from 'axios'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ResultTestCases from './ResultTestCases'

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
    const [language, setlanguage] = useState('nodejs')
    const [open, setOpen] = useState(false)
    const [resultExpand, setResultExpand] = useState(false)
    const [load, setLoad] = useState(false)
    const [testCases, setTestCases] = useState([])
    const [testCasesInputs, setTestCasesInputs] = useState([])
    const [oldCode, setOldCode] = useState('')
    const [newSolution, setNewSolution] = useState({})
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:3001/createSolution/visibleTestCases/${props.questionId}`,
            headers: { 'x-access-token': token }
        })
            .then(res => {
                verifyRepeats(res.data)
                console.log('test cases:')
                console.log(res.data)
                setCheck1(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    useEffect(() => {//passar o id do usuário parar saber se ele ja fez uma solução para esse problema
        //recebe um objeto com 1 campo "new" igual a false se ja tiver feito
        //ou um objeto com "new" = true junto com os atributos do problema
        const data = {
            userId: props.userId,
            questionId: props.questionId,
        }
        axios({
            method: 'post',
            url: 'http://localhost:3001/createSolution/exist',
            data: data,
            headers: { 'x-access-token': token }
        })
            .then(res => {
                /**
                 * data ={
                 *  new: true/false
                 *  codigo:
                 *  lenguage:
                 * }
                 */
                console.log(res.data)
                let s = res.data
                if (!s.new) { //se ja existe
                    setCode(s.codigo)
                    setlanguage(s.language)
                }
                setNewSolution(s)
                console.log(newSolution)
                setCheck2(true)
            })
            .catch(error =>{
                console.log(error)
            })
    }, [])

    const verifyRepeats = fetchedList => {
        if (fetchedList.length != testCasesInputs.length) {
            setTestCasesInputs(fetchedList)
        }
    }
    const handleExpandClick = () => {
        setResultExpand(!resultExpand);
    }
    const openExpandClick = () => {
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
    const runCodeHandler = async () => {
        if (oldCode == code) {
            alert('Do something with Code')
        } else {
            setOldCode(code)
            let program = {
                script: code,
                language: language,
                stdin: '',
            }
            let temp = []
            for (let i = 0; i < testCasesInputs.length; i++) {
                try {
                    program.stdin = testCasesInputs[i].input
                    let res = await axios({
                        method: 'POST',
                        url: 'http://localhost:3001/createSolution/run',
                        data: program,
                        headers: {'x-access-token': token}
                    })
                    let proto = {
                        id: testCasesInputs[i].id,
                        title: testCasesInputs[i].name,
                        input: testCasesInputs[i].input,
                        expected: testCasesInputs[i].expectedOutput,
                        output: res.data.output
                    }
                    temp.push(proto)
                } catch (error) {
                    console.log(error)
                    break
                }
            }
            setTestCases(temp)
            console.log('formated test cases:')
            console.log(testCases)
            if (testCases.length > 0) {
                setLoad(true)
            }
        }
        openExpandClick()
    }
    const submitCodeHandler = () => {
        console.log("new Solution :")
        console.log(newSolution.new)
        openExpandClick()
        if (newSolution.new == true) { //se não existe
            const data = {
                questionId: props.questionId,
                userId: props.userId,
                codigo: code,
                language: language,
            }
            axios({
                method: 'post',
                url: 'http://localhost:3001/createSolution',
                data: data,
                headers: { 'x-access-token': token }
            })
                .then(res => {
                    console.log(res.data) //solução criada, observar status da avaliação desta solução nas listas de avaliações
                    let aux = newSolution
                    aux.new = false
                    setNewSolution(aux)
                })
        } else { //se já existe
            const data = {
                solutionId: newSolution.solutionId, //id da solução que eu quero alterar
                codigo: code,
                language: language,
                questionId: props.questionId,
            }
            axios({
                method: 'post',
                url: 'http://localhost:3001/createSolution/updateSolution',
                data: data,
                headers: { 'x-access-token': token }
            })
                .then(res => {
                    console.log(res.data) // solução atualizada
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }
    const changeCodeHandler = (event) => {
        setCode(event.target.value)
    }
    if (check1 && check2) {
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
                        value={code}
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
                    <CardContent >
                        {load
                            ? <ResultTestCases resultTestCases={testCases} />
                            : <Typography>loading...</Typography>
                        }
                    </CardContent>
                </Collapse>
            </Card>
        )
    } else {
        return (
            <div>
                <Typography>loading</Typography>
            </div>
        )
    }
}

export default Solution