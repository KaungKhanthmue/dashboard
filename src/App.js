import { BrowserRouter,Routes,Route } from 'react-router-dom';
import User from './component/UserTable';
import Home from './layout/Home';
import UserFriendList from './component/UserFriendList';
import Post from './component/Post';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>

        <Route path="/dashboard" element={<Home/>}>
        <Route path="friend" element={<User/>}/>
        <Route path="post" element={<Post/>} />
        <Route path="friend/:id" element={<UserFriendList/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
