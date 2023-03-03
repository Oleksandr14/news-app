import { Route, Routes } from "react-router-dom";
import { lazy, LazyExoticComponent } from 'react';

import SharedLayout from "./SharedLayout/SharedLayout";

type ComponentType = LazyExoticComponent<React.FC>;

const HomePage: ComponentType = lazy(()=>import('../pages/HomePage'))
const NewsPage: ComponentType = lazy(()=>import('../pages/NewsPage'))
const ProfilePage: ComponentType = lazy(()=>import('../pages/ProfilePage') )
const LoginPage: ComponentType = lazy(()=>import('../pages/LoginPage'))

const App: React.FC = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;

