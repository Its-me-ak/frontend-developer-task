import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EventComponent from './components/EventComponent';
import CollectionComponent from './components/CollectionComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<EventComponent/>}/>
        <Route path='/collections' element={<CollectionComponent/>} />
      </Routes>
    </>
  );
}

export default App;
