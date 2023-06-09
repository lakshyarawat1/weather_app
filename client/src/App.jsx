import Dashboard from "./components/Dashboard"
import RightComponent from "./components/RightComponent"
import SideBar from "./components/SideBar"

function App() {

  return (
    <>
      <div className="flex">
        <SideBar />
        <Dashboard />
        <RightComponent />
      </div>
    </>
  )
}

export default App
