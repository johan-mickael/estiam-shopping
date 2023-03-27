import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import db from "../../../firebase_config";
import { useForm } from "react-hook-form";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const NewShoppingForm = () => {
    const { register, handleSubmit, watch, setValue, clearErrors, formState: { errors } } = useForm();

    const saveItem = async () => {
        await addDoc(collection(db, "shoppings"), {
            name: watch("name"),
            description: watch("description"),
            date: Timestamp.fromDate(new Date()),
            done: false
        });
        resetInputValue()
    };

    const resetInputValue = () => {
        setValue("name", "")
        setValue("description", "")
        clearErrors()
    }

    return (
        <form onSubmit={handleSubmit(saveItem)}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Create new shopping
                    </Typography>

                    <Typography variant="body">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    error={errors.name}
                                    fullWidth
                                    label="Name"
                                    autoFocus
                                    {...register("name", { required: "Please fill the name." })}
                                    helperText={errors.name && errors.name.message}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    error={errors.description}
                                    fullWidth
                                    label="Description"
                                    name="description"
                                    {...register("description")}
                                    helperText={errors.description && errors.description.message}
                                />
                            </Grid>
                        </Grid>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        disableElevation
                        startIcon={<AddShoppingCartIcon />}
                        fullWidth
                    >
                        Add
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default NewShoppingForm