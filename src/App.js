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
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />

        <Route path='/profile/:id' element={<Profile />} />

        <Route path='/admin' element={<Admin/>}>
        </Route>
        <Route path='/*' element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
