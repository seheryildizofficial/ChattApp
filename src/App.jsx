import { useState } from "react";
import AuthPage from "./pages/AuthPage.jsx";
import RoomPage from "./pages/RoomPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import "./styles/style.scss";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("TOKEN"));
  const [room, setRoom] = useState(null);
  //kullanıcı yetkisi yoksa giriş sayfası
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }
  //kullanıcı yetsikisi varsa oda seçme sayfası
  return (
    <div className="container">
      {room ? (
        <ChatPage room={room} />
      ) : (
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      )}
    </div>
  );
};

export default App;
