import './App.css';
import Tab from './Tab.jsx';
import  { createContext , useContext } from 'react'
import { useEffect , useState  } from 'react'
export const AppContext = createContext(null)

function App() {
  let [data , setData] = useState([])
  return (
    <div className="App">
      <AppContext.Provider value={{data , setData}}>
          <Tab />
      </AppContext.Provider>
    </div>
  );
}

export default App;
