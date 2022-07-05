import { Route, Routes } from 'react-router-dom';
import './App.css';
import BMI from './Components/BMI';
import BMR from './Components/BMR';
import Calorie from './Components/Calorie';
import IdealWeight from './Components/IdealWeight';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className='w-full min-h-screen bg-[url("https://img.freepik.com/free-photo/blurred-cardio-machines_1203-98.jpg?t=st=1657025913~exp=1657026513~hmac=aa18347eefaee92d472397565a75f2760ad09dd24484bab75676dc13f036c39a&w=1060")] bg-no-repeat bg-cover'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<BMI />}></Route>
        <Route path='/home' element={<BMI />}></Route>
        <Route path='/bmi' element={<BMI />}></Route>
        <Route path='/bmr' element={<BMR />}></Route>
        <Route path='/ideal-weight' element={<IdealWeight />}></Route>
        <Route path='/calorie' element={<Calorie />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
