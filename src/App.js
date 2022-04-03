import React, { useState } from 'react'
import SinglePage from './Components/SinglePage';
import Navbar from './Navbar'
function App() {
  const [value,setValue] = useState("");
  const [todoList,setTodoList] = useState([]);
  
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleCheck = (id,index) => {
    console.log(id,index);
    const newArr = [...todoList];
    const newObj = {...todoList[index]};
    newObj.checked = !todoList[index].checked;
    newArr[index] = newObj;
    setTodoList(newArr);
  }
  const handleClick = () => {
    const obj = {
      id: Math.floor(Math.random() * 1000),
      value,
      checked: false,
    }
    
    setTodoList([...todoList,obj]);
    setValue("");
  }
  console.log(todoList);
  return (
    <>
      <div className='wrapper'>
        <div>
          <input type="text" value={value} onChange={handleChange}/>
          <button onClick={handleClick}>Submit</button>
          {todoList && todoList.length > 0 && <SinglePage data={todoList} handleCheck={handleCheck}/>}
        </div>
      </div>
    </>
  )
}

export default App
