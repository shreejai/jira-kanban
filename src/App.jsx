import reactLogo from './assets/react.svg'
import './App.css'
import KanbanBoard from './components/KanbanBoard'

function App() {

  return (
    <>
      <h1 className='mb-2'>Agile Board</h1>
      <p className="read-the-docs text-lg sm:text-xl lg:text-2xl">Create, Drag and Drop tasks just like JIRA</p>
      <KanbanBoard/>
      <Footer/>
    </>
  )
}

export default App

function Footer(){
  return (
    <footer className='mt-4 sm:mt-20 lg:mt-60'>
      <p className="read-the-docs text-xs sm:text-lg lg:text-xl">
        Kanban Project made with<span>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-[30px] sm:h-[40px] inline p-[0.5rem]" alt="React logo" />
        </a></span> by Shreejai &copy; {new Date().getFullYear()} 
      </p>
    </footer>
  )
}
