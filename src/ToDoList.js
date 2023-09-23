import React, {useState} from "react";


const ToDoList = () => {
    // state = store property values that belong to a component --> re-render component when state changes
    // hook = allow functions to access state or other features
    // useState hook will let us track state in a function! 
        // LHS =  [current state, function that updates value of current state]
        // RHS = initial value -- you could have 0, True, "", [], ...    
    
    const [color, setColor] = useState("");
    const [favColor, setFavColor] = useState("pastel purple");

    const [inputTask, setInputTask] = useState("");
    const [taskList, setList] = useState([]);

    const handleColorInputChange = (event) => {
        setColor(event.target.value);
    }

    const changeFavColor = (color) => {
        setFavColor(color);
    }


    // this is a function component! --> could also do function handleChange(){}
    const handleTaskInputChange = (event) => {
        setInputTask(event.target.value);
    }
    
    // todo is our parameter -> the new task a user wants to add
    const handleAddItem = (todo) => {
        setList([...taskList, todo]); // ...list = current contents of list, and then we want to add on our todo item
        setInputTask(''); // reset input task to empty string again --> clear field when user clicks button
    }

    // remove doneTask from our list
    const handleRemoveItem = (doneTask) => {
        const newList = taskList.filter((task) => task !== doneTask);
        setList(newList);
    }

    return (
        <div>
            <h2>Welcome to my awesome list of stuff to do!</h2>

            <div className="FavColor">
                <p>Your favorite color is {favColor}</p>
                <input type="text" value={color} 
                    onChange={handleColorInputChange} placeholder="What is your new fav color?"/>
                <button onClick={() => changeFavColor(color)}>UPDATE</button>
            </div>


            <div className="ToDo">
                <input className="input" type="text" value={inputTask}
                    onChange={handleTaskInputChange} placeholder="Give me a task" />
                <button onClick={() => handleAddItem(inputTask)}>ADD</button>

                <ul>
                    {taskList.map(task =>{                        
                        return (
                            <li key={task}>
                                <span>{task}</span>
                                <button onClick={() => handleRemoveItem(task)}>DONE TASK</button>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    );
};
export default ToDoList;