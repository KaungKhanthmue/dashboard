import Nav from './layout/Nav'
import Header from './layout/Header'
import Body from './layout/Body'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Friend from './component/Friend';
import NavHome from './layout/NavHome';
import UserFriendList from './component/UserFriendList';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<NavHome/>}>
        </Route>

        <Route path="/dashboard" element={<NavHome/>}>
        <Route path="form" element={<Body/>} />
        <Route path="friend" element={<Friend/>}/>
        <Route path="friend/:id" element={<UserFriendList/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
