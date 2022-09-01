import React, {FC, useState} from 'react';
import ToDoItem from "../ToDoItem/ToDoItem";
import {Box, Button, TextField} from "@mui/material";

interface IUser {
    todo?: string | undefined
    id?: number | undefined
}

const ToDoList: FC<IUser> = () => {
    const [todoList, setTodoList] = useState<IUser[]>([])
    const [input, setInput] = useState<string>('')

    const addToDoHandler = () => {
        const newTodo = {id: Date.now(), todo: input}
        setTodoList([...todoList, newTodo])
        setInput('')
    }
    const onEnterHandler: React.KeyboardEventHandler<HTMLDivElement> = e => {
        if (e.key === 'Enter') {
            addToDoHandler()
        }
    }

    return (
        <Box sx={{width: 500, height: 600, margin: '0 auto'}}>
            <Box sx={{marginBottom: 5}}>
                <TextField
                    id="outlined-basic"
                    label="Add to-do"
                    variant="outlined"
                    size="small"
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    onKeyDown={onEnterHandler}
                />
                <Button
                    variant="contained"
                    onClick={addToDoHandler}
                >Add your task
                </Button>
            </Box>
            {todoList.map(({todo, id}, index) => <ToDoItem
                todo={todo}
                key={index}
                id={id}
                todoList={todoList}
                setTodoList={setTodoList}
            />)}
        </Box>
    );
};

export default ToDoList;