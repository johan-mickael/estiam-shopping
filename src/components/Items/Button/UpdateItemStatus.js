import { Button, Checkbox } from '@mui/material'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import db from '../../../firebase_config'

const UpdateItemStatus = ({ item }) => {
    const [checked, setChecked] = useState(item.status)

    const updateItemStatus = async () => {
        setChecked(!checked)
        const itemRef = doc(db, "items", item.id);
        await updateDoc(itemRef, {
            status: !checked
        })
    }

    return (
        <Button>
            <Checkbox checked={checked} onChange={updateItemStatus} />
        </Button>
    )
}

export default UpdateItemStatus