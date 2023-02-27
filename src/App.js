import {useState} from 'react'
import './App.css';
import {Task} from './component/Task'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@1,500&display=swap');
</style>


function App() {

  const [todotask, addtodotask] = useState([])
  const [newtask, settask] = useState('')


  const handleinput = (event) =>{
      settask(event.target.value)

  }
  const handleaddlist = () =>{
  //  Incase of tic-tac humne cells array ki index pta thi to changes kr liya yha bina index add ya delete nhi hota to new ways hh
    // e.preventDefault();
    
    if(newtask.length < 1){
      
      alert('Enter a valid task!')
      return;
     }
    for(let i=0;i < todotask.length;i++){
       
       if(todotask[i].taskname.toLowerCase() === newtask.toLowerCase()){
          alert('Task already added!')
          settask("")
          return;
       }
    } 
    
    const task = {
         id :todotask.length === 0 ? 1 : todotask[todotask.length - 1].id + 1,
         taskname : newtask,
         completed : false,
    };

    // const addedtask =[...todotask, task];
    //  addtodotask(addedtask);
    addtodotask(task.taskname !== ' ' ? [...todotask, task] : todotask);
     settask("")
  }

  const deleteTask = (id) =>{
  
      const newtodolist = todotask.filter((task) => task.id !== id);
        //  if(task === taskname){
        //   return false;
        //  }
        //  else{
        //   return true;
        //  }
 
    

      addtodotask(newtodolist);
  }
  // Here filter function helps to copy all elements of array to other with some cond. If we want to copy that element return true as return false if we dont want to copy that elelment 
  
  const completetask = (id) =>{
    
      addtodotask(
        todotask.map((task) => {
          if(task.id === id){
            return {...task, completed :true}
            
          }
          else{
            return task;
          }

        })
      )
  }


  return (
    <div className="App">
      <h1>What needs to be done today??</h1>
      <div className="main-body">
      <div className="addtask">
        <input value ={newtask} onChange={handleinput} placeholder="Add your task"/>
        <button onClick={handleaddlist} className="addbtn">Add Task</button>
      </div>
      
      <div className='list'>
        {/* {todotask.forEach((element) => {
             return <h1>element</h1>
        })
      } */}
      {todotask.map((task) => {
        return(
        <Task 
        taskname= {task.taskname} 
        id = {task.id} 
        completed = {task.completed}
        deleteTask = {deleteTask} 
        completetask = {completetask} />
        )
      })}
    </div>
    </div>
    </div>
  );
}

export default App;
