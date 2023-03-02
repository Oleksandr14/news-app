import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";

import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";

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
