import { useState } from "react"

export default function KanbanBoard() {

  const [newTicket, setNewTicket] = useState("");

  const handleAddTicket = () => {
    alert("New Ticket: "+newTicket);
  }

  return (
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
  )
}
