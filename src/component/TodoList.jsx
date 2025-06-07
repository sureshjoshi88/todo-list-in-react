import React, { useEffect, useState } from 'react'

const TodoList = () => {

    const [array, setArray] = useState([]);
    const [task, setTask] = useState('')
    const [filter, setFilter] = useState('All');

    useEffect(()=>{
        let storedata = JSON.parse(localStorage.getItem("todo"));
            setArray(storedata)
    
    },[]);
    
    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(array))
    },[array]);

    const addTaskButton = () => {
        if (task === "") {
            alert("please enter value");
        } else {
            const newTodo = {
                text: task,
                checked: false
            }
            setArray([...array, newTodo]);
            setTask("");
            
        }
    }
  
    
    const deleteTask = (index) => {
        const finalList = array.filter((item, ind) => ind !== index);

        setArray(finalList);
    }
    const toggleCheckbox = (index) => {
        const updastedArray = array.map((item, ind) => {
            return ind === index ? { ...item, checked: !item.checked } : item;
        });
        setArray(updastedArray)
    }
    const handleFilter = (e) => {
        setFilter(e.target.value)
    }
    const filterArray = array.filter((item) => {
        if (filter === "All") return true;
        if (filter === "Active") return !item.checked;
        if (filter === "Compalte") return item.checked;
        return true;

    })

    const handleEditTask = (index) =>{
        const newTask = prompt("enter a value")
        if(newTask!==null&& newTask.trim()!==""){
            const editTask = array.map((item,ind)=> ind===index?{...item,text:newTask}:item)
            setArray(editTask)
        }        
    }
    return (
        <>
            <div className='p-1'>
                <nav className='flex justify-between p-2'>
                <p className='font-bold mt-2 text-2xl '>Made By Suresh Joshi</p>
                <p className='font-bold mt-2 text-2xl'>Todo app</p>
                <button>theame</button>
                </nav>
                <div className='text-end p-2 mt-2'>
                    <select className='border rounded' value={filter} onChange={handleFilter} name="" id="">
                        <option value="All">All</option>
                        <option value="Active">Active</option>
                        <option value="Compalte">Compalte</option>
                    </select>
                </div>
                <div className='flex justify-center mt-10 gap-2'>
                    <input className='border rounded' value={task} onChange={(e) => setTask(e.target.value)} type="text" id='101' placeholder='Enter a task' required />
                    <button onClick={addTaskButton} className='bg-green-500 p-1 ps-3 pe-3 rounded cursor-pointer'>Add task</button>
                </div>
            </div>

            {filterArray.map((value, index) =>
               <div key={index}>
                 <div className='grid md:grid-cols-4 p-2' >
                    <div>
                        <p className='text-xl'>{index+1}</p>
                    </div>
                    <div>
                        <input type="checkbox" className=' h-8 w-4' checked={value.checked} onChange={() => toggleCheckbox(index)} name="" id="" />
                    </div>
                    <div >
                        <p className='text-xl font-medium'>{value.text}</p>
                    </div>
                    <div className='flex gap-3'>
                        <button className='bg-amber-300 p-1 ps-2 pe-2 rounded cursor-pointer' onClick={()=>handleEditTask(index)}>Edit</button>
                        <button onClick={() => deleteTask(index)} className='bg-red-600 p-1 ps-2 pe-2 text-white rounded cursor-pointer'>Delete</button>
                    </div>
                    

                </div>
                <hr />
               </div>
            )}
        </>
    )
}

export default TodoList
