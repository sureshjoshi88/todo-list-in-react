import React, { useEffect, useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { BsMoonFill } from "react-icons/bs";



const TodoList = (props) => {

    const [array, setArray] = useState([]);
    const [task, setTask] = useState('')
    const [filter, setFilter] = useState('All');


       useEffect(() => {
        const storedata = JSON.parse(localStorage.getItem("todo")) || [];
        setArray(storedata);

    }, []);


    const addTaskButton = () => {
        if (task.trim() === "") {
            alert("please enter value");
        } else {
            const newTodo = {
                text: task,
                checked: false
            }
            const finalarray = [...array, newTodo]
            setArray(finalarray);
            setTask("");
            localStorage.setItem("todo", JSON.stringify(finalarray));
        }
        
    }

    const keypresEvent = (e) => {
        if (e.key === "Enter") {
            addTaskButton();
        }
    }

    const deleteTask = (index) => {
        const finalList = array.filter((item, ind) => ind !== index);
        localStorage.setItem('todo', JSON.stringify(finalList));
        setArray(finalList);

    }
    const toggleCheckbox = (index) => {
        const updastedArray = array.map((item, ind) => {
            return ind === index ? { ...item, checked: !item.checked } : item;
        });
        localStorage.setItem('todo', JSON.stringify(updastedArray));
        setArray(updastedArray)
    }
    const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    const filterArray = array.filter((item) => {
        if (filter === "All") return true;
        if (filter === "Active") return !item.checked;
        if (filter === "Complete") return item.checked;
        return true;

    })

    const handleEditTask = (index) => {
        const newTask = prompt("enter a value")
        if (newTask !== null && newTask.trim() !== "") {
            const editTask = array.map((item, ind) => ind === index ? { ...item, text: newTask } : item)
            localStorage.setItem('todo', JSON.stringify(editTask));
            setArray(editTask)
        }
    }
    return (
        <>
            <div className='p-1'>
                <nav className='flex justify-between p-2'>
                    <p className='font-bold mt-2 text-2xl '>Made By Suresh Joshi</p>
                    <p className='font-bold mt-2 text-2xl'>Todo app</p>
                    {props.mode === "light" ?
                        <button className='cursor-pointer text-2xl' onClick={() => props.handlemode()}><BsMoonFill /></button> : <button className='cursor-pointer text-2xl' onClick={() => props.handlemode()}><IoIosSunny /></button>
                    }
                </nav>
                <div className='text-end p-2 mt-2'>
                    <select className='border rounded' value={filter} onChange={handleFilter} name="" id="">
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Complete">Complete</option>
                    </select>
                </div>
                <div className='flex justify-center mt-10 gap-2'>
                    <input className='border border-green-600  rounded w-100 h-10 outline-0 ' autoFocus onKeyDown={keypresEvent} value={task} onChange={(e) => setTask(e.target.value)} type="text" id='101' placeholder='Enter a task' required name='todo' />
                    <button onClick={addTaskButton} className='bg-green-500 p-1 ps-3 pe-3 rounded cursor-pointer shadow shadow-blue-700 font-medium'>Add task</button>
                </div>
            </div>

            {filterArray.map((value, index) =>
                <div key={index}>
                    <div className='grid md:grid-cols-4 p-2' >
                        <div>
                            <p className='text-xl font-medium'>{index + 1}</p>
                        </div>
                        <div>
                            <input type="checkbox" className=' h-8 w-4' checked={value.checked} onChange={() => toggleCheckbox(index)} name="" id="" />
                        </div>
                        <div >
                            <p className='text-xl font-medium'>{value.text}</p>
                        </div>
                        <div className='flex gap-3'>
                            <button className='bg-amber-300 p-1 ps-2 pe-2 rounded cursor-pointer font-medium' onClick={() => handleEditTask(index)}>Edit</button>
                            <button onClick={() => deleteTask(index)} className='bg-red-600 p-1 ps-2 pe-2 text-white rounded cursor-pointer font-medium'>Delete</button>
                        </div>

                    </div>
                    <hr />
                </div>
            )}
        </>
    )
}

export default TodoList
