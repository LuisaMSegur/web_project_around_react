import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./images/logo.png";
import avatar from "./images/LagoLouise.jpg";
import buttonProfile from "./images/EditButton.png";
import buttonEdit from "./images/AddButton.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <header className="header">
          <img src={logo} alt="logo around USA" className="header__logo" />
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__container-photo">
              <img
                src={avatar}
                alt="profile photo"
                className="profile__photo"
                id="avatar"
              />
            </div>
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button className="profile__button">
              <img
                src={buttonProfile}
                alt="edit button"
                className="profile__button profile__button_edit"
              />
            </button>
            <h2 className="profile__subtitle">Explorador</h2>
            <button className="profile__button-add">
              <img
                src={buttonEdit}
                alt="button add card"
                className="profile__button-add profile__button-add_card"
              />
            </button>
          </section>
          <section className="cards"></section>
        </main>
        <footer className="footer">
          <h3 className="footer__name">2024 Luisa M. Seguro</h3>
        </footer>
      </div>
    </>
  );
}

export default App;
