import './App.css'
import Login from "./components/login/Login"
function App() {
  return (
    <>
      <div className='All'>
        <Login />
      </div>
    </>
  );
}

export default App;
//npx json-server db/db.json --port 8000