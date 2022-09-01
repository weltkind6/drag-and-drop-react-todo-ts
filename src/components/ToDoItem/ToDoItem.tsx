import React, {Dispatch, FC, SetStateAction} from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Button, Box} from "@mui/material";
import Card from "@mui/material/Card";
import DeleteIcon from '@mui/icons-material/Delete';

interface ToDoItemProps {
    todo: string | undefined
    id: number | undefined
    todoList: any
    setTodoList: Dispatch<SetStateAction<any>>
}

const ToDoItem: FC<ToDoItemProps> = ({todo, id, todoList, setTodoList}) => {
    const onDeleteItem = (itemId: number | undefined) => {
        setTodoList(todoList.filter((el: { id: number | undefined; }) => el.id !== itemId))
    }
    return (
        <div>
            <Card sx={{minWidth: 275, marginBottom: 5}}>
                <CardContent>
                    <Typography variant="body2">{todo}</Typography>
                </CardContent>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CardActions>
                        <Button
                            size="small"
                            variant="contained"
                            color="success"
                        >
                            Complete
                        </Button>
                    </CardActions>
                    <Button
                        onClick={() => onDeleteItem(id)}
                        variant="outlined"
                        startIcon={<DeleteIcon/>}
                        color="error"
                        size="small"
                        sx={{height: 31, margin: '8px'}}
                    >
                        Delete
                    </Button>
                </Box>
            </Card>
        </div>
    );
};

export default ToDoItem;