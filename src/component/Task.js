export const Task = (props) =>{
      

return (
<div className='task' style={{backgroundColor : props.completed ? "green" : "#BDCDD6"}}> 
          
          {/* <input type={'checkbox'} onChange={() => handlecheck(task)} /> */}
          <h2>{props.taskname}</h2>
          {/* Jb bhi kisi function me paramemeter pass krna hota h use () => krke call krte h na ki delete(task) krke */}
          <div className="buttons">
          <button onClick={() => props.deleteTask(props.id)}>X</button>
          <button onClick={() => props.completetask(props.id)}>✔</button>
          </div>
          
</div>
)}