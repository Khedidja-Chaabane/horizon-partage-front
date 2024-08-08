import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewPost from './components/Forum/NewPost';
import AllPosts from './components/Forum/AllPosts';
import Home from './components/Home/Home';
import Inscription from './components/User/Inscription';
import Admin from './components/Admin/Admin';
import Profile from './components/Profile/Profile';
import Connexion from './components/User/Connexion';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import ShowPost from './components/Forum/ShowPost';
import EditPost from './components/Forum/EditPost';
import GestionUsers from './components/Admin/GestionUsers/GestionUsers';
import ShowUser from './components/Admin/GestionUsers/ShowUser';
import Actions from './components/Actions/Actions';
import NewAction from './components/Actions/NewAction';
import GestionActions from './components/Admin/GestionActions/GestionActions';
import ShowAction from './components/Actions/ShowAction';
import UpdateUser from './components/Admin/GestionUsers/UpdateUser';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newPost' element={<NewPost />} />
        <Route path='/showPost/:id' element={<ShowPost/>} />
        <Route path='/editPost/:id' element={<EditPost/>} />
        <Route path='/forum' element={<AllPosts />} />
        <Route path='/actions' element={<Actions />} />
        <Route path='/newAction' element={<NewAction />} />
        <Route path='/showAction/:id' element={<ShowAction/>} />

        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />

        <Route path='/profile/:id' element={<Profile />} />

        <Route path='/admin' element={<Admin/>}>
        <Route path='/admin/gestionUsers' element={<GestionUsers/>}/>
        <Route path='/admin/gestionActions' element={<GestionActions/>}/>

        <Route path='/admin/showUser/:id' element={<ShowUser/>}/>
        <Route path='/admin/updateUser/:id' element={<UpdateUser/>}/>

        </Route>
        <Route path='/*' element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
