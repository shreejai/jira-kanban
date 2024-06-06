import reactLogo from './assets/react.svg'
import './App.css'
import KanbanBoard from './components/KanbanBoard'

function App() {

  return (
    <>
      <h1>Agile Board</h1>
      <KanbanBoard/>
      <Footer/>
    </>
  )
}

export default App

function Footer(){
  return (
    <footer>
      <p className="read-the-docs">
        Kanban Project made with<span>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-min inline" alt="React logo" />
        </a></span> by Shreejai &copy; {new Date().getFullYear()} 
      </p>
    </footer>
  )
}
