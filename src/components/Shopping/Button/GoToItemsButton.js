import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const GoToItemsButton = ({id}) => {
    return (
        <Link to={`${id}/items`}>
            <Button color='secondary'>
                <FormatListBulletedIcon />
            </Button>
        </Link>
    )
}

export default GoToItemsButton