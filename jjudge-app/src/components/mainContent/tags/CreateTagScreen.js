import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


function createData(name, description, amount) {
    return name, description, amount
}
const cards = [
    createData('INICIANTE', 'Problemas básicos para que acabou de iniciar na programação', 49),
    createData('STRINGS', 'Problemas básicos para que acabou de iniciar na programação', 120),
    createData('ESTRUTURA DE DADOS', 'Problemas básicos para que acabou de iniciar na programação', 49),
    createData('MATEMÁTICA', 'Problemas básicos para que acabou de iniciar na programação', 359),
    createData('PARADIGMAS', 'Problemas básicos para que acabou de iniciar na programação', 497),
    createData('GRAFO', 'Problemas básicos para que acabou de iniciar na programação', 324),
    createData('SQL', 'Problemas básicos para que acabou de iniciar na programação', 20),
    createData('TODOS', 'Problemas básicos para que acabou de iniciar na programação', 1253)
]

const useStyles = makeStyles((theme) =>({
    root:{
        padding:'2px'
    },
    title_bar:{ 
    }
}))

const Tags = props => {
    const classes= useStyles()
    
    return (
        <Grid  
        container 
        direction='column' 
        spacing={2} 
        alignItems='stretch'
        className={classes.root}>
            <Grid item className={classes.title_bar}>
                <Typography>CATEGORIES</Typography>
            </Grid>
        </Grid>
    )
}

export default Tags