import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import React, { useState } from 'react'


const CreateTag = props => {

    const [tagName, setTagName] = useState('')
    const [tagDescription, setTagDescription] = useState('')

    const tagNameHandler = event => {
        setTagName(event.target.value)
    }
    const tagDescriptionHandler = event => {
        setTagDescription(event.target.value)
    }
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Criar nova Tag</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Neste espaço você poderá criar uma Tag
                    para ser atribuída neste e em outros problemas
                </DialogContentText>
                <TextField
                    onChange={tagNameHandler}
                    autoFocus
                    margin="dense"
                    id="Tag_name"
                    label="Nome"
                    fullWidth
                />
                <TextField
                    onChange={tagDescriptionHandler}
                    margin="dense"
                    id="Tag_description"
                    label="Descrição"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.saveTag.bind(this, tagName, tagDescription)} color="primary">
                    Save
                </Button>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )

}

export default CreateTag