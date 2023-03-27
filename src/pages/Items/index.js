import { Grid } from '@mui/material'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewItem from '../../components/Items/Form/newitem'
import EnhancedTable from '../../components/Items/List/ItemTable'
import db from '../../firebase_config'

const Items = () => {
    const { shoppingId } = useParams();
    const shoppingRef = db.collection("shoppings").doc(shoppingId);
    const [shopping, setShopping] = useState();
    

    const getShopping = () => {
        shoppingRef.onSnapshot((doc) => {
            setShopping({
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                date: doc.data().date,
                done: doc.data().done
            })
        });
    }

    useEffect(() => {
        getShopping()
    }, [])

    return (
        <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={4} >
                <NewItem shoppingId={shoppingId} />
            </Grid>
            <Grid item xs={12} sm={8}>
                <EnhancedTable shoppingId={shoppingId} shopping={shopping} />
            </Grid>
        </Grid>
    )
}
export default Items