import { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import api from "../utils/Api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null); 
  const [loading, setLoading] = useState(false);

const handleOpenPopup = (popupData) => {
  setPopup(popupData); 
};

const handleClosePopup = () => {
  setPopup(null); 
};
  
  // Obtener usuario actual
  useEffect(() => {
    api.getUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => console.error("Error al obtener el usuario:", error));
  }, []);

  // Obtener tarjetas
  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        if (Array.isArray(res)) {
          setCards(res);
        } else {
          console.error("Los datos recibidos no son un array:", res);
        }
      })
      .catch((error) =>
        console.error("Error al obtener las tarjetas:", error.message || error)
      );
  }, []);

  // Manejo de actualización de usuario
  const handleUpdateUser = ({ name, about }) => {
    api
      .editUser(name, about)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        handleClosePopup(); 
      })
      .catch((error) =>
        console.error("Error al actualizar los datos del usuario:", error)
      );
  };

  // Manejo de actualización de avatar
  const handleUpdateAvatar = (avatarData) => {
    setLoading(true);
    api
      .editAvatar(avatarData)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        handleClosePopup();
      })
      .catch((error) => {
        console.error("Error al actualizar el avatar:", error);
      })
      .finally(() => setLoading(false));
  };

   // Manejo de likes
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    api
      .toggleLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) =>
        console.error("Error al cambiar el estado del like:", error)
      );
  };

  // Manejo de eliminación de tarjeta
  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) =>
        console.error("Error al eliminar la tarjeta:", error)
      );
  };
 // Añadir una nueva tarjeta
 const handleAddPlaceSubmit = (name, link) => {
  return api.createCard(name, link)
    .then((newCard) => {
      setCards((prevCards) => [newCard, ...prevCards]);
    })
    .catch((error) => {
      console.error("Error al añadir la tarjeta:", error);
    });
};


  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
      <div className='page'>
        <Header />
        <Main 
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        onAddPlaceSubmit={handleAddPlaceSubmit}
        onOpenPopup={handleOpenPopup}
        popup={popup} 
        onClosePopup={handleClosePopup}
        onUpdateAvatar={handleUpdateAvatar}
        loading={loading}/>    
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
