import { Route, Routes } from 'react-router-dom';
import './App.css';
import BMI from './Components/BMI';
import BMR from './Components/BMR';
import Calorie from './Components/Calorie';
import IdealWeight from './Components/IdealWeight';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='w-full min-h-screen'>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<BMI />}></Route>
        <Route path='/bmi' element={<BMI />}></Route>
        <Route path='/bmr' element={<BMR />}></Route>
        <Route path='/ideal-weight' element={<IdealWeight />}></Route>
        <Route path='/calorie' element={<Calorie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
