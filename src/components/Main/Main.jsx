import { useState } from "react";
import Popup from "./componentsMain/Popup/Popup.jsx";
import EditProfile from "./componentsMain/form/EditProfile/EditProfile.jsx";
import EditAvatar from "./componentsMain/form/EditAvatar/EditAvatar.jsx";
import NewCard from "./componentsMain/form/NewCard/NewCard.jsx";
import Card from "./componentsMain/Card/Card.jsx";
import avatar from "../../images/4Latemar.png";
import buttonProfile from "../../images/EditButton.png";
import buttonEdit from "../../images/AddButton.png";
// import ImagePopup from "./componentsMain/Card/ImagePopup.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];
console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container-photo">
          <img
            src={avatar}
            alt="profile photo"
            className="profile__photo"
            id="avatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>
        <h1 className="profile__title">Jacques Cousteau</h1>
        <button className="profile__button">
          <img
            src={buttonProfile}
            alt="edit button"
            className="profile__button profile__button_edit"
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
        </button>
        <h2 className="profile__subtitle">Explorador</h2>
        <button className="profile__button-add">
          <img
            src={buttonEdit}
            alt="button add card"
            className="profile__button-add profile__button-add_card"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </button>
      </section>
      <ul className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={handleOpenPopup}
          />
        ))}
      </ul>
{popup && (
  <Popup onClose={handleClosePopup} title={popup.title} isOpen={!!popup}>
    {console.log("Renderizando Popup", popup)}
    {popup.children}
  </Popup>
)}
    </main>
  );
}
