import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const addTodoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //Reducer
        // adding todo
        addTodos: (state,action) => {
            state.push(action.payload);
            return state;
        },
        //removing key with the key 'id'
        removeTodos: (state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        //updating
        updateTodos: (state, action) => {
            return state.map ((todo) => {
                //we are mapping the list and then Updating item with the help of key id
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    };
                }
                return todo;
            })
        },
        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            })
        }
    }
})

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;