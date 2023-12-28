import {BrowserRouter,Routes, Route} from 'react-router-dom';
import PackageScreen from './screens/PackageScreen';
import HomeScreen from './screens/HomeScreen';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/package/:packageId' element={<PackageScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}