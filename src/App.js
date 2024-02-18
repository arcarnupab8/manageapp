import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Manageincome from "./components/Manageincome";
import Manageborrow from "./components/Manageborrow";
import Managebill from "./components/Managebill";
import Managestock from "./components/Managestock";
import Managetime from "./components/Managetime";
import Addoption from "./components/Addoption";
import Searchoption from "./components/Searchoption";

import style from "./css/app.module.css";

function App() {
  return (
    <div className={style.container}>
      <div className={style.navbar}><Navbar/></div>
      <div className={style.content}>
        <Routes>
          <Route path='/manageincome' element={<Manageincome/>}/>
          <Route path='/manageborrow' element={<Manageborrow/>}/>
          <Route path='/managebill' element={<Managebill/>}/>
          <Route path='/managestock' element={<Managestock/>}/>
          <Route path='/managetime' element={<Managetime/>}/>
          <Route path='/add_option' element={<Addoption/>}/>
          <Route path='/search_option' element={<Searchoption/>}/> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
