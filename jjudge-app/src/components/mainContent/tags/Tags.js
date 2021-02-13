import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import TagCard from './TagCard'


function createData(name, description, amount) {
    return {name, description, amount}
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title_bar: {
        padding: '5px'
    }
}))

const Tags = props => {
    const classes = useStyles()

    return (
        <Grid
            container
            direction='row'
            spacing={2}
            justify='flex-start'
            alignItems='flex-start'
            className={classes.root}
        >
            <Grid item className={classes.title_bar} xs={12}>
                <Typography>CATEGORIES</Typography>
            </Grid>

            {cards.map((card, index) =>
                <Grid key={index} item xs={12} sm={6} md={4}>
                    <TagCard
                        title={card.name}
                        description={card.description}
                        amount={card.amount}
                    />
                </Grid>
            )
            }
        </Grid>
    )
}

export default Tags