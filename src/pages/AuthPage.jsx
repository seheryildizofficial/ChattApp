import { auth, provider } from "../firebase/Config.js";
import { signInWithPopup } from "firebase/auth";

const AuthPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setIsAuth(true);
      localStorage.setItem("TOKEN", data.user.refreshToken);
    });
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Sohbet Odası</h1>

        <p>Devam etmek için giriş yapın</p>

        <button onClick={handleClick}>
          <img src="/public/g-logo.png" />
          <span>Google ile giriş yap</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
