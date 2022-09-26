import './App.css';
import Tab from './Tab.jsx';
import  { createContext , useState } from 'react'
export const AppContext = createContext(null)

function App() {
  let [ data , setData ] = useState([''])
  // if (data[0] != ''){
  //   console.log(data)
  // }
  return (
    <div className="App">
      <AppContext.Provider value={{data , setData}}>
          <Tab />
      </AppContext.Provider>
    </div>
  );
}

export default App;
