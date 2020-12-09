import { Card, Typography, makeStyles, CardContent, CardActions, Button, CardHeader } from '@material-ui/core'
import React, { useState } from 'react'
import TestCases from './TestCases'
const useStyles = makeStyles({
    root: {
        minWidth: 350,
        minHeight: 500,
    },
    title: {
        fontSize: 20
    },
    pos: {
        marginBottom: 12
    }

})


const Problem = props => {
    const classes = useStyles()
    const [buttonText, setButtonText] = useState('TestCases')
    const [enunciated, setEnunciated] = useState(true)
    const buttonTextHandler = () => {
        if (enunciated) {
            setButtonText('TestCases')
        } else {
            setButtonText('Enunciated')
        }
    }
    const enunciatedHandler = () => {
        setEnunciated(!enunciated)
        buttonTextHandler()
    }
    let content
    if (enunciated) {
        content = <Typography>
            {props.enunciated}
        </Typography>
    } else {
        //lista de test cases
        content = <TestCases visibleTestCases={props.visibleTestCases}/>
            
    
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.title}
                action={
                    <Button
                        size='small'
                        onClick={enunciatedHandler}
                    >
                        {buttonText}
                    </Button>
                }
            >
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}

export default Problem