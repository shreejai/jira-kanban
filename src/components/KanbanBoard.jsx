import { useState } from "react"

export default function KanbanBoard() {

  const [backlog, setBacklog] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [newTicket, setNewTicket] = useState("");

  const handleAddTicket = () => {
    if(newTicket !== ""){
      setBacklog([...backlog, newTicket]);
      setNewTicket("");
    }
  }

  const handleDragStart = (e, task, sourceColumn) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("sourceColumn", sourceColumn)
  }

  const handleDrop = (e, targetColumn) => {
    const task = e.dataTransfer.getData("task");
    const sourceColumn = e.dataTransfer.getData("sourceColumn");

    if (targetColumn !== sourceColumn){
      switch (targetColumn) {
        case "Backlog":
          setBacklog([...backlog, task]);
          break;
        case "InProgress":
          setInProgress([...inProgress, task]);
          break;
        case "Completed":
          setCompleted([...completed, task]);
          break;
        default:
          break;
      }

      switch (sourceColumn) {
        case "Backlog":
          setBacklog(backlog.filter((t) => t !== task));
          break;
        case "InProgress":
          setInProgress(inProgress.filter((t) => t !== task));
          break;
        case "Completed":
          setCompleted(completed.filter((t) => t !== task));
          break;
        default:
          break;
      }
    }
  }

  return (
    <>
    <div className="flex flex-col gap-4 mt-4">
      <div>KanbanBoard</div>
      <input
        type="text"
        value={newTicket}
        onChange={ (e) => setNewTicket(e.target.value) }
        placeholder="Enter new ticket"
        className="p-2 rounded-lg"
      />
      <button onClick={handleAddTicket}>Add Ticket</button>
    </div>
    <div className="kanbanBoard flex flex-row mx-auto w-full gap-4">
      <Column
        title="Backlog"
        tasks={backlog}
        onDrop={(e) => handleDrop(e, "Backlog")}
        onDragStart={handleDragStart}
      />
      <Column
        title="InProgress"
        tasks={inProgress}
        onDrop={(e) => handleDrop(e, "InProgress")}
        onDragStart={handleDragStart}
      />
      <Column
        title="Completed"
        tasks={completed}
        onDrop={(e) => handleDrop(e, "Completed")}
        onDragStart={handleDragStart}
      />
    </div>
    </>
  )
}

function Column({title, tasks, onDrop, onDragStart}){
  return (
    <div 
      className="" 
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <div 
          key={index}
          draggable
          onDragStart={(e) => onDragStart(e, task, title)}
        >
          {task}
        </div>
      ))}
    </div>
  )
}