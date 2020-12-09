import { IconButton, Tooltip, withStyles } from '@material-ui/core'
import React from 'react'
import FlightIcon from '@material-ui/icons/Flight';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

const StatusTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11
    }

}))(Tooltip)

const Status = props => {

    if (props.statusCode === 0) {
        return (
            <div>
                <StatusTooltip title="Na fila">
                    <IconButton>
                        <FlightTakeoffIcon/>
                    </IconButton>
                </StatusTooltip>
            </div>
        )
    } else if (props.statusCode === 1) {
        return (
            <div>
                <StatusTooltip title="Executando">
                    <IconButton>
                        <FlightIcon/>
                    </IconButton>
                </StatusTooltip>
            </div>
        )
    } else {
        return (
            <div>
                <StatusTooltip title="Finalizado">
                    <IconButton>
                        <FlightLandIcon/>
                    </IconButton>
                </StatusTooltip>
            </div>
        )
    }

}

export default Status