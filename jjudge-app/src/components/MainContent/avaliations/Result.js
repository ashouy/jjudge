import { IconButton, Tooltip, withStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import React from 'react'

const ResultTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11
    }

}))(Tooltip)

const Result = props => {

    return (
        props.resultCode == 0 ?
            <div>
                <ResultTooltip title="Correta">
                    <IconButton>
                        <CheckCircleOutlineIcon />
                    </IconButton>
                </ResultTooltip>
            </div>
            :
            <div>
                <ResultTooltip title="Incorreta">
                    <IconButton>
                        <ErrorOutlineIcon color='secondary' />
                    </IconButton>
                </ResultTooltip>
            </div>
    )

}

export default Result