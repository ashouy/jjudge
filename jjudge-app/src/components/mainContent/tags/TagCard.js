import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Divider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        cursor:'pointer'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    header: {
        backgroundColor: '#f5f5f5'
    }

});


const TagCard = props => {
    const classes = useStyles();

    return (
        <Card onClick={() =>{alert('alo')}} className={classes.root} variant='outlined'>
            <CardHeader
                className={classes.header}
                title={props.title}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
                <Divider />
                <Typography>{props.amount} Problemas</Typography>
            </CardContent>

        </Card>
    );
}

export default TagCard