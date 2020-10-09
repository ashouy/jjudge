import { Button, Card, CardActions, CardContent, makeStyles, TextareaAutosize, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import axios from 'axios'
const useStyles = makeStyles({
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
    }

})


const Solution = props => {
    const classes = useStyles()
    const [code, setCode] = useState('')

    const runCodehandler = () => {
        const data = {
            codigo: code,
            questionId: 2
        }
        axios.post("http://localhost:3001/createSolution", data)
            .then(function (response) {
                console.log(response)
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
            <CardContent>
                <Typography className={classes.title} color='textSecondary' gutterBottom>
                    Solution
                </Typography>

                <TextareaAutosize className={classes.textarea}
                    onChange={changeCodeHandler}
                    placeholder="enter code here"
                >
                </TextareaAutosize>
            </CardContent>
            <CardActions>
                <Button
                    onClick={runCodehandler}
                    variant="contained"
                    size="small"
                    color="primary">
                    Run
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    color="primary">
                    Submit
                </Button>
            </CardActions>
        </Card>
    )
}

export default Solution