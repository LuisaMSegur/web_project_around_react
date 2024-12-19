import { useContext } from "react";
import Popup from "./componentsMain/Popup/Popup.jsx";
import EditProfile from "./componentsMain/form/EditProfile/EditProfile.jsx";
import EditAvatar from "./componentsMain/form/EditAvatar/EditAvatar.jsx";
import NewCard from "./componentsMain/form/NewCard/NewCard.jsx";
import Card from "./componentsMain/Card/Card.jsx";
import buttonProfile from "../../images/EditButton.png";
import buttonEdit from "../../images/AddButton.png";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
  onOpenPopup,
  onClosePopup,
  popup,
  loading,
  onUpdateAvatar,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  
  const newCardPopup = { title: "Nuevo lugar", content: <NewCard
    onAddPlaceSubmit={(name, link) => {
      return onAddPlaceSubmit(name, link).then(() => onClosePopup());
    }}
  /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    content: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar Avatar", content: <EditAvatar onUpdateAvatar={onUpdateAvatar} loading={loading} /> };



  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container-photo">
          <img
            src={currentUser?.avatar}
            alt="profile photo"
            className="profile__photo"
            id="avatar"
            onClick={() => onOpenPopup(editAvatarPopup)}
          />
        </div>
        <h1 className="profile__title">{currentUser?.name}</h1>
        <button className="profile__button">
          <img
            src={buttonProfile}
            alt="edit button"
            className="profile__button profile__button_edit"
            onClick={() => onOpenPopup(editProfilePopup)}
          />
        </button>
        <h2 className="profile__subtitle">{currentUser?.about}</h2>
        <button className="profile__button-add">
          <img
            src={buttonEdit}
            alt="button add card"
            className="profile__button-add profile__button-add_card"
            onClick={() => onOpenPopup(newCardPopup)}
          />
        </button>
      </section>
      <ul className="cards">
        {cards.map((card) => (
          <Card
            key={card._id || card.id}
            card={card}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title} >
          {console.log("Renderizando Popup", popup)}
          {popup.content}
        </Popup>
      )}
    </main>
  );
}
