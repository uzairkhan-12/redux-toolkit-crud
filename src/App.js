import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTeamMember from './components/AddTeamMember';
import EditTeamMember from './components/EditTeamMember';
import FineTable from './components/FineTable';
import Navbar from './components/Navbar';
import AddFine from './components/AddFine';
function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-team-member" element={<AddTeamMember />}></Route>
        <Route path="/add-fine" element={<AddFine />}></Route>
        <Route path="/edit-team-member/:id" element={<EditTeamMember />}></Route>
        <Route path="/fine-table" element={<FineTable />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
