import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewPost from './components/Forum/NewPost';
import AllPosts from './components/AllPosts';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/newPost' element={<NewPost/>}/>
      <Route path='/forum' element={<AllPosts/>}/>

      </Routes>
    </div>
  );
}

export default App;
